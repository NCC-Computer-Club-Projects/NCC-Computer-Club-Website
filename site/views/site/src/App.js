import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import camelCaseContext from '../../../assets/scripts/view-utils/camel-case-context';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Terms from './pages/Terms';

export default function App() {
  let pages = [];
  const pagesDir = require.context('./pages', true, /\.(js|ts|tsx|jsx)$/); // capture javascript files
  pagesDir.keys().forEach(key => {
    const { casedFileName } = camelCaseContext(key, ['js', 'ts', 'tsx', 'jsx']);
    pages.push(casedFileName.toLowerCase());
  });
  
  const ignorePages = /(home|error404|index)/;
  pages = pages.filter(page => !ignorePages.test(page)); // remove error404 from the pages array

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout pages={pages}/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}