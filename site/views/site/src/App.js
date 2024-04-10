import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import camelCaseContext from '../../../assets/scripts/view-utils/camel-case-context';
import KeyList from '../../../assets/scripts/view-utils/key-list';

export default function App() {
  let pages = [];
  let routes = [];

  const pagesDir = require.context('./pages', true, /\.(js|ts|tsx|jsx)$/); // capture page component files
  const routeKey = new KeyList();

  useEffect(() => {
    console.log(pages);
    console.log(routes);
  }, []);

  // create page routes
  (async() => {
    for await (const key of pagesDir.keys()) {
      // page component variables
      const { casedFileName } = camelCaseContext(key, ['js', 'ts', 'tsx', 'jsx']);
      const lowerCasedName = casedFileName.toLowerCase();
      const newKey = routeKey.generateKey(key); // generate new key
      
      const ignorePages = /(home|error(404)?|index)/; // keep out of the pages array
  
      const module = await import(`./pages/${casedFileName}`); // import page component
      const Component = module.default.name;

      const newRoute = () => {
        if (!ignorePages.test(lowerCasedName)) { // construct standard routes
          pages.push(lowerCasedName); // push new page
          return <Route key={newKey} path={lowerCasedName} element={<Component/>}/>;
        } else if (/(home|index)/.test(lowerCasedName)) { // construct index routes
          return <Route key={newKey} index element={<Component/>}/>;
        } else if (/error(404)?/.test(lowerCasedName)) { // construct error route
          return <Route key={newKey} path="*" element={<Component/>}/>;
        }
      }
      
      routes.push(newRoute()); // push routes
    }
  })();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout pages={pages}/>}>
          { routes }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}