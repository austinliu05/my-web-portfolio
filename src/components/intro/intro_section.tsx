import React, { useEffect, useState } from "react";
import "./intro_section.css";

const IntroSection: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);  // Small delay before typing starts
  }, []);
  const [bioContent, setBioContent] = useState<JSX.Element[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const bio =
      "Hi! I'm Austin Liu, currently pursuing a dual degree in Applied Math-Computer Science and Economics at Brown University, with an additional focus in Entrepreneurship.";

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
              <p>
                When I'm not working, you'll probably find me playing volleyball with my friends, practicing fingerstyle guitar for fun, or hunting down new food places to try.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bio-container">
        {/* Title text with continuous animation */}
        <h1 className="hover-text">
          {!showText &&
            <span className="placeholder">austinliu.dev</span>
            }
          {showText && (
            <span className="typewriter">austinliu.dev</span>
          )}
        </h1>

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
