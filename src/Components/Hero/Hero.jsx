import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile3.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Ismail Omotayo,</span> Front-End Engineer based in Nigeria
      </h1>
      <p>
        I am a frontend software engineer from Ondo, Nigeria with 4 years
        experince in designing and building digital solutions that solves
        real-world problems
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">Download CV</div>
      </div>
    </div>
  );
};

export default Hero;
