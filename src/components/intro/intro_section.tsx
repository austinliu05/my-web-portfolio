import React, { useEffect, useState } from "react";
import "./intro_section.css";

const IntroSection: React.FC = () => {
  const [staggeredText, setStaggeredText] = useState<JSX.Element[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const text = "austinliu.dev";
    const letters = text.split("").map((letter, index) => (
      <span key={index} className="hover-text" style={{ transitionDelay: '0s' }}>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
    setStaggeredText(letters);
  }, []);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);  // Toggle the flip state
  };

  return (
    <section className="section-intro">
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="headshot"
              src={`${process.env.PUBLIC_URL}/assets/headshot.jpg`}
              alt="Austin Liu"
            />
            <div className="click-me-text">About Me</div> {/* Click Me Text */}
          </div>
          <div className="flip-card-back">
            <div className="bio-text">
              <h2>About Me</h2>
              <p>
                When I'm not buried in schoolwork, you'll probably find me playing competitive volleyball with Brown’s men's varsity team, jamming on my fingerstyle guitar for friends, or hunting down new foods to try.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bio-container">
        <h1 className="hover-text">{staggeredText}</h1>
        <p className="bio py-2">
          Hi! I'm Austin Liu, currently pursuing a dual degree in Computer Science and Economics at
          Brown University, with an additional focus on earning an Entrepreneurship Certificate.
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
