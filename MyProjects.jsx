// src/components/MyProjects.jsx
import React from 'react';
import './MyProjects.css';

const MyProjects = () => {
  const projects = [
    { id: 1, name: "Project One", description: "A project about React.", link: "#" },
    { id: 2, name: "Project Two", description: "A project about JavaScript.", link: "#" },
    { id: 3, name: "Project Three", description: "A project about Node.js.", link: "#" },
  ];

  return (
    <section id="projects" className="projects container">
      <h2 className="section-title">My Projects</h2>
      <div className="row">
        {projects.map(project => (
          <div key={project.id} className="col-md-4">
            <div className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
