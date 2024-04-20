import './Header.scss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../../contexts';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';
import brand from '../../../../../assets/images/logo/n4c-logo.svg';

export default function Header() {
  

  const pageList = useContext(LayoutContext);
  const keyList = new KeyList();

  const selectLink = (e) => {
    
  }
  
  const linkComponents = pageList.map(page => {
    const linkName = page.replace(page[0], page[0].toUpperCase());
    return (
      <li className="nav-item d-inline-flex align-items-center" key={keyList.generateKey(page)} onClick={selectLink}>
        <Link to={page === 'home' ? '/' : page} className="nav-link">
          {/pcrepair/i.test(linkName) ? 'PcRepair' : linkName}
        </Link>
      </li>
    );
  });


  return (
    <header id="Header">
      <nav className="navbar navbar-expand-md mx-3">
        <div className="container-fluid justify-content-around align-items-md-stretch">
          <Link className="navbar-brand d-inline-flex flex-row align-items-center gap-3" to="/" >
            <img src={brand} height={80} className="rounded-circle"/>
            <h1 className='m-0'>N4C</h1>
          </Link>
          <button 
            className="navbar-toggler" 
            data-bs-toggle="collapse" 
            data-bs-target="#pages" 
            aria-controls="pages" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="pages">
            <ul className="navbar-nav justify-content-evenly gap-5 h-100">
              {linkComponents}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}