import './PageLink.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PageLink({pageName, isActive, handleClick}) {
  const link = isActive ? (
    <Link to={pageName === 'home' ? '/' : pageName} className="nav-link active" aria-current="page">
      {/pcrepair/i.test(pageName) ? 'PcRepair' : pageName.replace(/^\w/, pageName[0].toUpperCase())}
    </Link>
  ) : (
    <Link to={pageName === 'home' ? '/' : pageName} className="nav-link">
      {/pcrepair/i.test(pageName) ? 'PcRepair' :  pageName.replace(/^\w/, pageName[0].toUpperCase())}
    </Link>
  );

  return (
    <li className="nav-item d-inline-flex align-items-center" onClick={handleClick}>
      {link}
    </li>
  );
}