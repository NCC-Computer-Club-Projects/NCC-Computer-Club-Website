import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import KeyList from '../../../assets/scripts/view-utils/key-list';
import * as PAGES from './pages';

export default function App() {
  const routeKeys = new KeyList();
  const pageList = Object.keys(PAGES).map(pageName => pageName.toLowerCase());
  const pagesArr = Object.values(PAGES);

  // create routes from PAGES modules 
  const routes = (() => {
    return pagesArr.map(Page => { // access page module
      const { name } = Page;
      const newKey = routeKeys.generateKey(name); // generate key
      return <Route key={newKey} path={name} element={<Page />}/>;
    }); 
  })();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout pageList={pageList} />}>
        {routes}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}