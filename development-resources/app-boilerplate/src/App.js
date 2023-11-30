import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import camelCaseContext from './assets/scripts/camel-case-context';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Terms from './pages/Terms';

export default function App() {
  let pages = [];
  const pagesDir = require.context('./pages', true, /\.(js|ts|tsx|jsx)$/);
  pagesDir.keys().forEach(key => {
    const {casedFileName} = camelCaseContext(key, ['js', 'ts', 'tsx', 'jsx']);
    pages.push(casedFileName.toLowerCase());
  });
  pages.splice(pages.indexOf('error404'), 1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pages={pages} linkClassName="pageLink"/>}>
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