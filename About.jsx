// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about container">
      <h2 className="section-title">About Me</h2>
      <p className="about-description">
        I am a web developer with a strong passion for creating amazing web experiences. I have experience in building modern web applications using React, Node.js, and other technologies.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">I build responsive and dynamic web applications using modern web technologies.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">I design user-friendly and aesthetically pleasing interfaces for a seamless experience.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Backend Development</h5>
              <p className="card-text">I create robust backends using Node.js and other technologies to support front-end interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
