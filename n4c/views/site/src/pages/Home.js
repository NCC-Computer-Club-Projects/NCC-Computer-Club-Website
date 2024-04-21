import React from 'react';
import '@styles/pages/Home.scss';
import heroImg from '@images/fun-at-primantis.jpg';

export default function Home() {
  return (
    <div id='Home'>
      <div className='hero container-fluid'>
        <img className='img-fluid' src={heroImg} alt='Computer Club members hanging out at Primanti Bros'/>
      </div>
    </div>
  );
}