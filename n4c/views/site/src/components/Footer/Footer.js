import './Footer.scss';
import React from 'react';
import logo from '@images/logos/n4c/n4c-logo.svg';
import FooterColumn from '../FooterColumn/FooterColumn';

export default function Footer() {

  // specify icons with path relative to iconContext
  const columnData = [
    {
      title: 'More Info',
      links: [
        {
          text: 'Email list',
          icon: '',
          destination: '#'
        },{
          text: 'Sign Up',
          icon: '',
          destination: '#'
        }
      ]
    },{
      title: 'Events',
      links: [
        {
          text: 'Skillsusa',
          icon: '',
          destination: '#'
        },{
          text: 'Workshops',
          icon: '',
          destination: '#'
        }
      ]
    },{
      title: 'Contact Us',
      links: [
        {
          text: 'n4c@northampton.edu',
          icon: './email.svg',
          destination: '#'
        },{
          text: 'Discord',
          icon: './discord.svg',
          destination: '#'
        }
      ]
    },
  ];

  const columns = columnData.map(data => <FooterColumn key={data.title} title={data.title} links={data.links}/>);

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='logo-space'>
          <img src={logo} className='logo-space-logo rounded-circle'/>
          <div className='location'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <p>
              3835 Green Pond Rd,<br/>
              Bethlehem, PA 18020<br/>
              Founder's Hall 118<br/>
            </p>
          </div>
        </div>
        <div className='footer-columns'>
          {columns}
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright Northampton Community College ©2010-2024.</p>
        <a href='*'>Terms</a>
      </div>
    </footer>
  );
}