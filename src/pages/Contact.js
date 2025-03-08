import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi 📲</h2>
      
      <p className="contact-text"> 
        N’hésitez pas à me joindre pour toute question, collaboration ou opportunité !
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:0645545351">06 45 54 53 51</a>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:raja_m@etna-alternance.net">raja_m@etna-alternance.net</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/marwah-raja" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/rajam91" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </div>
          
      </div>
    </section>
  );
}

export default Contact;
