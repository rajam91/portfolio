import React from 'react';
import '../Projects.css';

const projects = [
  {
    title: "Application Beauté",
    image: process.env.PUBLIC_URL + "/app.png",
    description: "Une plateforme connectant les prestataires de maquillage en France.",
    link: "#"
  },
  {
    title: "Share Ur Pic",
    image: process.env.PUBLIC_URL + "/pic.png",
    description: "Un projet personnel de création d'une application façon Instagram.",
    link: "#"
  },
  {
    title: "Fractale de newton",
    image: process.env.PUBLIC_URL + "/fractale.png",
    description: "Un petit projet mathématique en python.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets 🚀</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
