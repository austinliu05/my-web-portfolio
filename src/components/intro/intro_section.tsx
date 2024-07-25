import React from "react";
import "./intro_section.css";
const IntroSection: React.FC = () => {
  return (
    <section className="section-intro">
        <div className="bio-container">
          <div className="headshot-container">
          <img className='headshot' src={`${process.env.PUBLIC_URL}/assets/headshot.jpg`} alt="Austin Liu"/>
          </div>
          <h1>My Web Portfolio</h1>
          <p className="bio py-2">
            Hi there! I'm Austin Liu, a sophomore at Brown University pursuing a
            dual degree in Computer Science and Economics, along with an
            Entrepreneurship Certificate.
          </p>
          <div className="resume">
            <a
              href={`${process.env.PUBLIC_URL}/assets/AustinLiuResume.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button>RESUME</button>
            </a>
          </div>
      </div>
    </section>
  );
};

export default IntroSection;
