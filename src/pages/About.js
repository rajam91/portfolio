import React from 'react';
import '../About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      <p>
        Je me présente, <span className="highlight">Marwah</span>, étudiante en <span className="highlight">Bachelor Concepteur Développeur d’Applications.</span>
        <br /><br />
        Exploratrice infatigable du savoir et de l’innovation, je façonne des projets qui allient créativité et ingénierie. 
        Toujours curieuse d’apprendre et de repousser mes limites, j’avance avec la conviction que chaque ligne de code peut 
        dessiner un futur plus inspirant.
      </p>
    </section>
  );
}

export default About;
