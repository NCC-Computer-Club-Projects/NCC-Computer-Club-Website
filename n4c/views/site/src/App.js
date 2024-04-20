import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import KeyList from '../../../assets/scripts/view-utils/key-list';
import * as PAGES from './pages';

export default function App() {
  // set home to front of the array
  let pages = Object.keys(PAGES);
  const homeIdx = pages.findIndex(page => /home/i.test(page));
  const homePage = pages[homeIdx];
  pages.splice(homeIdx, 1);
  pages.unshift(homePage);

  // filter page navs in layout header
  const pageNavList = pages.map(pageName => pageName.toLowerCase())
    .filter(pageName => !/(error(404)?|index|contact)/i.test(pageName));

  // create routes from PAGES modules
  const pagesArr = Object.values(PAGES); // array of page modules
  const routeKeys = new KeyList(); // initialize route keylist

  const routes = (() => {
    return pagesArr.map(PageComponent => { // access page module
      const name = PageComponent.name.toLowerCase();
      const newKey = routeKeys.generateKey(name); // generate key
      
      switch (name) {
        case 'error':
        case 'error404':
          return <Route key={newKey} path="*" element={<PageComponent />}/>;
        case 'home':
          return <Route key={newKey} path="/" element={<PageComponent />}/>;
        default:
          return <Route key={newKey} path={name} element={<PageComponent />}/>;
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