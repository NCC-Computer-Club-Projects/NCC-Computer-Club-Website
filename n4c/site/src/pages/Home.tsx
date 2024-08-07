import React from 'react';
import '@styles/pages/Home.scss';
import Banner from '../components/Banner/Banner';
import missionImg from '@images/mock-images/mission.jpg'
import WorksCard from '../components/WorksCard/WorksCard';

export default function Home() {
  const cardData = [
    {
      title: 'GitHub',
      text: 'Take a look at some of our GitHub projects.' 
    },{
      title: 'Cyber Range',
      text: 'Practice securing vulnerabilities on our cyber range.' 
    },{
      title: 'Workshops',
      text: 'Aquire new skills at our weekly workshops.' 
    },{
      title: 'PC Repair',
      text: 'Laptop in need of a fix? Visit the PC Repair Clinic!' 
    },
  ];

  const worksCards = cardData.map(card => <WorksCard key={card.title} title={card.title} text={card.text} />);

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
        <div className="custom-shape-divider-bottom-1713741397">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <main>
        <section className='mission'>
          <h3>Our Mission</h3>
          <div className='mission-content'>
            <p>
              <img className='mission-img rounded-circle' src={missionImg}/>
              Students of Northampton's computer and information technology sector learn many skills in their studies, but putting those knowledge into practice can be a challenge. Our members posses the potential to create something big for themselves and the community using not only what they learn here at Northampton, but also the skills they acquire through their own research and hard work, Northampton Community College Computer Club- or N4C-  gives students a chance to put their learning into practice!
            </p>
          </div>
        </section>
        <section className='works'>
          <h3>See What We're Working On!</h3>
          <div className='card-display d-flex flex-wrap flex-row'>
            {worksCards}
          </div>
        </section>
        <section className='advisor'></section>
      </main>
    </div>
  );
}