import './Banner.scss';
import React from 'react';

export default function Banner({header, main, action}) {
  return (
    <div className='banner position-absolute'>
      <h1>{header}</h1>
      <p>{main}</p>
      <div className='action d-flex justify-content-end'>
        <a href={action.link} target='_blank' className='action-text d-inline-flex flex-row'>
          <h3>{action.text}</h3>
          <h3>{action.arrow && '\u2192'}</h3>
        </a>
      </div>
    </div>
  );
}