import './PageLink.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import upperCaseAll from '@scripts/utils/uppercase-all.js';

export default function PageLink({pageName, isActive, handleClick}) {
  const link = isActive ? (
    <Link to={pageName === 'home' ? '/' : pageName} className="nav-link active" aria-current="page">
      {upperCaseAll(pageName)}
    </Link>
  ) : (
    <Link to={pageName === 'home' ? '/' : pageName} className="nav-link">
      {upperCaseAll(pageName)}
    </Link>
  );

  return (
    <li className="nav-item d-inline-flex align-items-center" onClick={handleClick}>
      {link}
    </li>
  );
}