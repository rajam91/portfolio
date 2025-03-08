import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Likes from './pages/Likes';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Likes />
      <Contact />
    </div>
  );
}

export default App;
