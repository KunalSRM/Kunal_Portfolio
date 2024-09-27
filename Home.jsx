// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">I am a passionate web developer</p>
      </div>
    </section>
  );
};

export default Home;
