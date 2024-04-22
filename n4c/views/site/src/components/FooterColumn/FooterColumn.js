import './FooterColumn.scss';
import React from 'react';

export default function FooterColumn({title, links}) {
  const iconContext = require.context('../../assets/images/icons', true, /\.svg$/, 'sync');

  const formattedLinks = links.map(link => (
    <li className='footer-link' key={link.text}>
      <a href={link.destination}>
        {link.icon && <img src={iconContext(link.icon)} />} 
        {link.text}
      </a>
    </li>
  ));

  return (
    <div className='footer-column'>
      <h5>{title}</h5>
      <ul>{formattedLinks}</ul>
    </div>
  );
}