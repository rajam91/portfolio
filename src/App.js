import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Likes from './pages/Likes';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Likes />
        <Contact />
      </main>
    </div>
  );
}

export default App;
