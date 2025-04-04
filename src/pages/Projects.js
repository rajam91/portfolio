import React from 'react';
import '../Projects.css';

const projects = [
  {
    title: "Application Beauté",
    image: process.env.PUBLIC_URL + "/app.png",
    description: "Une plateforme connectant les prestataires de maquillage en France.",
    link: "https://github.com/rajam91"
  },
  {
    title: "Share Ur Pic",
    image: process.env.PUBLIC_URL + "/pic.png",
    description: "Un projet personnel de création d'une application façon Instagram.",
    link: "https://github.com/rajam91/Share-Ur-Pic"
  },
  {
    title: "Fractale de newton",
    image: process.env.PUBLIC_URL + "/fractale.png",
    description: "Un petit projet mathématique en python.",
    link: "https://github.com/rajam91/Newtons-Fractale"
  },
  {
    title: "Générateur de mot de passe",
    image: process.env.PUBLIC_URL + "/password.JPG",
    description: "Un générateur de mot de passe en python.",
    link: "https://github.com/rajam91/password-generator"
  },
  {
    title: "Drawing Page",
    image: process.env.PUBLIC_URL + "/drawing.JPG",
    description: "Une page de dessin en ligne.",
    link: "https://github.com/rajam91/drawing-app"
  },
  {
    title: "Rock Paper Scissors",
    image: process.env.PUBLIC_URL + "/rpc.JPG",
    description: "Le jeu pierre-feuille-ciseau.",
    link: "https://github.com/rajam91/Rock-paper-scissors"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets </h2>
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