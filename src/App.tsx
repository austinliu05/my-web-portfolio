import React from 'react';
import './App.css';
import IntroSection from './components/intro/intro_section';
import ProjectsSections from './components/projects/projects_section';
import ExperiencesSection from './components/experiences/experiences_section';
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <IntroSection />
        <hr className="separator" />
        <Skills />
        <hr className="separator" />
        <ProjectsSections />
        <hr className="separator" />
        <ExperiencesSection />
        <hr className="separator" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
