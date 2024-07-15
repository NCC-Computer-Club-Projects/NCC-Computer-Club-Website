import './WorksCard.scss';
import React from 'react';
import 'animate.css';

export default function WorksCard({title, text}) {
  return (
    <div className='works-card text-center animate__animated'>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}