import './Footer.scss';
import React from 'react';
import logo from '@super-assets/images/logo/n4c-logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-top d-flex flex-row'>
        <div className='logo-space'>
          <img src={logo} width={50}/>
          <div className='location'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <p>
              3835 Green Pond Rd,<br/>
              Bethlehem, PA 18020<br/>
              Founder's Hall 118<br/>
            </p>
          </div>
        </div>
      </div>
      <div className='footer-bottom d-flex flex-row justify-content-between'></div>
    </footer>
  );
}