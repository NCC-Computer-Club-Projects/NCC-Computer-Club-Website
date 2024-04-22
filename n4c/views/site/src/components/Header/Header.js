import './Header.scss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../../contexts';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';
import brand from '@super-assets/images/logo/n4c-logo.svg';
import PageLink from '../PageLink/PageLink';

export default function Header() {
  const pages = useContext(LayoutContext);
  const [pageLinks, setPageLinks] = useState(() => {
    const pageMap = {};

    for (const link of pages) pageMap[link] = false;

    return pageMap;
  });

  const linkKeys = new KeyList();

  const selectLink = (clickedLink) => {
    // update pageLinks
    setPageLinks(prevLinks => {
      // copy links
      const newLinks = { ...prevLinks };

      // set all non-clicked links to inactive
      // set clicked link to active
      for (const link in newLinks) {
        if (link === clickedLink) newLinks[link] = true;
        else newLinks[link] = false;
      }

      return newLinks;
    });
  }
  
  const linkComponents = [];

  for (const name in pageLinks) {
    const pageLink = (
      <PageLink 
        key={linkKeys.generateKey(name)}
        handleClick={() => selectLink(name)} 
        pageName={name} 
        isActive={pageLinks[name]}
      />
    );

    linkComponents.push(pageLink);
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md mx-3">
        <div className="container-fluid justify-content-around align-items-md-stretch">
          <Link 
            className="navbar-brand d-inline-flex flex-row align-items-center gap-3" 
            to="/" 
            onClick={() => selectLink('home')} 
          >
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