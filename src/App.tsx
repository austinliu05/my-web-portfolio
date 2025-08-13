import { useEffect } from 'react';
import './App.css';
import IntroSection from './components/intro/intro_section';
import ProjectsSections from './components/projects/projects_section';
import ExperiencesSection from './components/experiences/experiences_section';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import SkillsCarousel from './components/skills/skills_carousel';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  useEffect(() => {
    const handler = (e: ErrorEvent) => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener('error', handler);

    return () => {
      window.removeEventListener('error', handler); // cleanup on unmount
    };
  }, []);

  return (
    <div className="App">
      <ScrollProgressBar />
      <Navbar />
      <main role="main">
        <IntroSection />
        <hr className="separator" />
        <SkillsCarousel />
        <hr className="separator" />
        <ProjectsSections />
        <hr className="separator" />
        <ExperiencesSection />
        <hr className="separator" />
        {/* <SportsSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
