import React from 'react';
import { Outlet } from "react-router-dom";
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContext } from '../../contexts';

export default function Layout({ pageList }) {
  
  return (
    <LayoutContext.Provider value={pageList}>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContext.Provider>
  );
}
