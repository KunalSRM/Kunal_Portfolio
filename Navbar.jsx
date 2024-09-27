// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <FaUser /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <FaLaptopCode /> My Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
