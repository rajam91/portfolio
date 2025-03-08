import React from 'react';
import '../Likes.css';

const Likes = () => {
  const interests = [
    {
      title: "Informatique",
      image: process.env.PUBLIC_URL + "/cs.JPG",
      description: "Passionnée par l’univers du développement, de l’IA et des nouvelles technologies.",
    },
    {
      title: "Beauté & Maquillage",
      image: process.env.PUBLIC_URL + "/makeup.JPG",
      description: "J’adore l’univers de la beauté et l’art du maquillage, un moyen d’expression infini.",
    },
    {
      title: "Cosmologie",
      image: process.env.PUBLIC_URL + "/space.JPG",
      description: "L’univers et ses mystères m’inspirent chaque jour à explorer et à apprendre davantage.",
    },
    {
      title: "Lecture",
      image: process.env.PUBLIC_URL + "/reading.JPG",
      description: `"L'homme est ce qu'il croit." — Fiodor Dostoïevski`,
    }
  ];

  return (
    <section id="likes" className="likes">
      <h2>Mes intérêts 🩷 </h2>
      
      <p className="intro-text">
        D’un regard extérieur, mes passions pourraient sembler éparpillées aux quatre vents, 
        un éclectisme sans fil conducteur apparent. Pourtant, c’est précisément dans cette 
        diversité que je me retrouve, que je me définis. Polyvalente, je navigue avec aisance 
        entre l’informatique, le maquillage et la cosmologie, des univers qui, à première vue, 
        semblent n’avoir aucune corrélation. Mais, pour moi, ils dessinent ensemble le tableau 
        complexe de mes intérêts, illustrant une soif d’apprendre insatiable.
      </p>

      <div className="likes-container">
        {interests.map((item, index) => (
          <div key={index} className="like-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Likes;
