import React from "react";
import "./intro_section.css";
const IntroSection: React.FC = () => {
  return (
    <section className="section-intro">
        <div className="bio-container">
          <h1>My Web Portfolio</h1>
          <p className="bio py-2">
            Hi there! I'm Austin Liu, a sophomore at Brown University pursuing a
            dual degree in Computer Science and Economics, along with an
            Entrepreneurship Certificate.
          </p>
          <div className="resume">
            <a
              href="https://drive.google.com/file/d/1TZx45CviuHNNAnYpTJ2EBsj-OXCJTFEF/view?usp=sharing"
              rel="noreferrer"
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
