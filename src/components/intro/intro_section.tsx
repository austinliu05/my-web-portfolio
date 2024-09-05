import React from "react";
import "./intro_section.css";
const IntroSection: React.FC = () => {
  return (
    <section className="section-intro">
      <div className="bio-container">
        <div className="headshot-container">
          <img className='headshot' src={`${process.env.PUBLIC_URL}/assets/headshot.jpg`} alt="Austin Liu" />
        </div>
        <h1>My Web Portfolio</h1>
        <p className="bio py-2">
          Hi! I'm Austin Liu, currently pursuing a dual degree in Computer Science and Economics at Brown University, with an additional focus on earning an Entrepreneurship Certificate.
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
