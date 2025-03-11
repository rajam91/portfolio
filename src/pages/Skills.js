import React from "react";
import "../Skills.css";

//const skills = [
   // { title: "React", image: "/react-native.png" },
  //  { title: "React Native", image: "/react-native.png" },
  //  { title: "NodeJs", image: "/nodejs.png" },
   // { title: "Python", image: "/python.png" },
   // { title: "Javascript", image: "/js.png" },
   // { title: "Typescript", image: "/ts.png" },
//];

const skills = [
    { title: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { title: "React Native", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { title: "NodeJs", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { title: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { title: "Javascript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { title: "Typescript", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { title: "PostgreSQL (psql)", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { title: "MySQL", image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" }, 
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Mes compétences techniques</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.image} alt={`Logo de ${skill.title}`} />
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
