import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div>
          <h1>TripMe</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/karthiknadar1204" target='_blank' >
            <i className="fab fa-github-square"></i>
          </a>
          <a href="https://www.instagram.com/karthiknadar1204/" target='_blank' >
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href="https://twitter.com/Karthikreincar1" target='_blank' >
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="section">
          <h4>Project</h4>
          <a href="/">ChangeLog</a> 
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div className="section">
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div className="section">
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="section">
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
