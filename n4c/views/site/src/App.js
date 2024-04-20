import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import KeyList from '../../../assets/scripts/view-utils/key-list';
import * as PAGES from './pages';

export default function App() {
  // filter page navs in layout header
  const pageNavList = Object.keys(PAGES).map(pageName => pageName.toLowerCase())
    .filter(pageName => !/(error(404)?|home|index|contact)/.test(pageName));

  // create routes from PAGES modules
  const pagesArr = Object.values(PAGES); // array of page modules
  const routeKeys = new KeyList(); // initialize route keylist

  const routes = (() => {
    return pagesArr.map(Page => { // access page module
      const name = Page.name.toLocaleLowerCase();
      const newKey = routeKeys.generateKey(name); // generate key
      
      switch (name) {
        case 'error':
        case 'error404':
          return <Route key={newKey} path="*" element={<Page />}/>;
        case 'home':
          return <Route key={newKey} path="/" element={<Page />}/>;
        default:
          return <Route key={newKey} path={name} element={<Page />}/>;
      }
    }); 
  })();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout pageList={pageNavList} />}>
        {routes}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}