import React from 'react';
import '@styles/pages/Home.scss';
import Banner from '../components/Banner/Banner';
import missionImg from '@images/mock-images/mission.jpg'

export default function Home() {
  return (
    <div id='Home'>
      <section className='hero container-fluid position-relative p-0'>
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
          <h1>
            April 4<br/>
            <span className='light'>Thursday<br/></span>
            12pm - 4pm<br/>
          </h1>
        </div>
      </section>
      <section className='mission d-flex flex-row'>
        <div className='mission-text'>
          <h3>Our Mission</h3>
          <p>Students of Northampton's computer and information technology sector learn many skills in their studies, but putting those knowledge into practice can be a challenge. Our members posses the potential to create something big for themselves and the community using not only what they learn here at Northampton, but also the skills they acquire through their own research and hard work, Northampton Community College Computer Club– or N4C–  gives students a chance to put their learning into practice!</p>
        </div>
        <img className='mission-img rounded-circle' src={missionImg}/>
      </section>
    </div>
  );
}