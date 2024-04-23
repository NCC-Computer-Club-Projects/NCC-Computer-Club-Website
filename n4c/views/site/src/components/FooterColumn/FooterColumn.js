import './FooterColumn.scss';
import React from 'react';

export default function FooterColumn({title, links}) {
  const iconContext = require.context('../../assets/images/icons', true, /\.svg$/, 'sync');

  const formattedLinks = links.map(link => (
    <li className='footer-link' key={link.text}>
      {link.icon && <img className='footer-icon' src={iconContext(link.icon)} />} 
      <a href={link.destination}>{link.text}</a>
    </li>
  ));

  return (
    <div className='footer-column'>
      <h5 className='footer-title'>{title}</h5>
      <ul className='footer-content'>{formattedLinks}</ul>
    </div>
  );
}