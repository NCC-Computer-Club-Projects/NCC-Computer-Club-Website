import './Banner.scss';
import React from 'react';

export default function Banner({header, main, action}) {
  return (
    <div className='banner position-absolute'>
      <h1>{header}</h1>
      <p>{main}</p>
      <div className='action d-flex justify-content-end'>
        <a href={action.link} target='_blank' className='action-text d-inline-flex flex-row'>
          <h4>{action.text}</h4>
          <h4>{action.arrow && '\u2192'}</h4>
        </a>
      </div>
    </div>
  );
}