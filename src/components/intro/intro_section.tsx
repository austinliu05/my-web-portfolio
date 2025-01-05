import React, { useEffect, useState } from "react";
import "./intro_section.css";

const IntroSection: React.FC = () => {
  const [titleText, setTitleText] = useState<JSX.Element[]>([]);
  const [bioContent, setBioContent] = useState<JSX.Element[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const title = "austinliu.dev";
    const bio =
      "Hi! I'm Austin Liu, currently pursuing a dual degree in Computer Science and Economics at Brown University, with an additional focus on earning an Entrepreneurship Certificate";

    // TITLE: Split into letters for continuous animation
    const titleLetters = title.split("").map((letter, index) => (
      <span
        key={`title-${index}`}
        className="hover-text-title"
        style={{
          animationDelay: `${index * 0.05}s`,
          animationDuration: "10s",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
    setTitleText(titleLetters);

    // BIO: Split into words, then each word into letters, so line breaks only occur between words
    const bioWords = bio.split(" ").map((word, i) => (
      <span key={`word-${i}`} className="word">
        {word.split("").map((letter, j) => (
          <span key={`word-${i}-letter-${j}`} className="hover-text-bio">
            {letter}
          </span>
        ))}
        <span>&nbsp;</span> {/* Add space between words */}
      </span>
    )); 
    setBioContent(bioWords);
  }, []);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
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
            <div className="click-me-text">About Me</div>
          </div>
          <div className="flip-card-back">
            <div className="bio-text">
              <h2>About Me</h2>
              <p>
                When I'm not working, you'll probably find me playing volleyball on Brown’s men's
                varsity team, playing fingerstyle guitar for friends, or hunting down new food places
                to try.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bio-container">
        {/* Title text with continuous animation */}
        <h1 className="hover-text">{titleText}</h1>

        {/* Bio text, word-wrapped */}
        <p className="bio">
          {bioContent}
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
