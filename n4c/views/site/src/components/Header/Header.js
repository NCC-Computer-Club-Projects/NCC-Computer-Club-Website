import './Header.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../../contexts';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';
import brand from '../../../../../assets/images/logo/n4c-logo.svg';

export default function Header() {
  const pageList = useContext(LayoutContext);
  const keyList = new KeyList();
  
  const linkComponents = pageList.map(page => {
    const linkName = page.replace(page[0], page[0].toUpperCase());
    return (
      <li className="nav-item" key={keyList.generateKey(page)}>
        <Link to={page === 'home' ? '/' : page} className="nav-link">
          {/pcrepair/i.test(linkName) ? 'PcRepair' : linkName}
        </Link>
      </li>
    );
  });


  return (
    <header id="Header">
      <nav className="navbar navbar-expand-md bg-primary">
        <div id="pages" className="container-fluid">
          <Link className="navbar-brand" to="/" >
            <img src={brand} height={100}/>
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
          <div className="collapse navbar-collapse" id="pages">
            <ul className="navbar-nav">
              {linkComponents}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}