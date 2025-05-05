// App.tsx
import './App.css';
import IntroSection from './components/intro/intro_section';
import ProjectsSections from './components/projects/projects_section';
import ExperiencesSection from './components/experiences/experiences_section';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import SkillsCarousel from './components/skills/skills_carousel';
import ScrollProgressBar from './components/ScrollProgressBar';
import SportsSection from './components/sports/Sports';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handler = (event: Event) => {
      if (
        event instanceof ErrorEvent &&
        event.message.includes("ResizeObserver loop completed")
      ) {
        event.stopImmediatePropagation();
      }
    };
    window.addEventListener("error", handler, true);
    return () => window.removeEventListener("error", handler, true);
  }, []);

  return (
    <div className="App">
      <ScrollProgressBar />
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
        <SportsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
