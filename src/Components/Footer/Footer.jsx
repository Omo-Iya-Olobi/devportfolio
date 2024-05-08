import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>ISMAIL</h1>
          <p>
            I am front-End developer from Nigeria with 4+ experience crafting
            web solutions, and building Digital solutions that solve real-world
            problems
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Ismail Omotayo. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
