import React from 'react';
import './App.css';
import IntroSection from './components/intro/intro_section';
import ProjectsSections from './components/projects/projects_section';
import ExperiencesSection from './components/experiences/experiences_section';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import SkillsCarousel from './components/skills/skills_carousel';
import CustomCursor from './components/customCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import LifeSection from './components/life/Life';

function App() {
  return (

    <div className="App">
      <ScrollProgressBar />
      {/* <CustomCursor /> */}
      <Navbar />
      <div>
        <IntroSection />
        <hr className="separator" />
        <SkillsCarousel />
        <hr className="separator" />
        <ProjectsSections />
        <hr className="separator" />
        <ExperiencesSection />
        <hr className="separator" />
        <LifeSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
