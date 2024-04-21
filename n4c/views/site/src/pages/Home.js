import React from 'react';
import '@styles/pages/Home.scss';
import Banner from '../components/Banner/Banner';

export default function Home() {
  return (
    <div id='Home'>
      <div className='hero container-fluid position-relative p-0'>
        <Banner 
          header='Be At Skills USA' 
          main='Support N4C as we take on SkillsUSA! Our members will compete in web design and cyber security.' 
          action={{
            link: 'https://www.skillsusa.org', 
            text: 'Check it out',
            arrow: true
          }}
        />
        <div className='event-time position-absolute'>
          April 4<br/>
          Thursday<br/>
          12pm - 4pm<br/>
        </div>
      </div>
    </div>
  );
}