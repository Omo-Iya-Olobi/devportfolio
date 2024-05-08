import React from 'react';
import './About.css';
import theme_image from './../../assets/theme_pattern.svg';
import profile_image from './../../assets/profile3.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_image} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced and professional frontend developer with over
              four years of professional expertise in the field. Throughout my
              career, i have had the priviledge of collaborating with top
              professionals and building webistes for prestigious brands and
              organizations worldwide contributing to their success and growths
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication i
              bring to each projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>React-JS</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>46+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>13+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
