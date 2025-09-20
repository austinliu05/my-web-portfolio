import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./intro_section.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const IntroSection: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const [bioContent, setBioContent] = useState<JSX.Element[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500); // Small delay before typing starts
  }, []);

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
      {/* Theme Toggle positioned in top-right corner */}
      <div className="intro-theme-toggle">
        <ThemeToggle />
      </div>
      
      <motion.div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        whileHover={{ rotateY: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleCardClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <motion.img
              className="headshot"
              src={`${process.env.PUBLIC_URL}/assets/headshot.jpg`}
              alt="Austin Liu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* <motion.div
              className="click-me-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              About Me
            </motion.div> */}
          </div>
          <div className="flip-card-back">
            <div className="bio-text">
              <p>
                When I'm not working, you'll probably find me playing volleyball with my
                friends, practicing fingerstyle guitar for fun, or hunting down new food places to try.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bio-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* Title text with continuous animation */}
        <h1 className="hover-text">
          {!showText && (
            <span className="placeholder">austinliu.dev</span>
          )}
          {showText && (
            <motion.span
              className="typewriter"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              austinliu.dev
            </motion.span>
          )}
        </h1>

        {/* Bio text, word-wrapped */}
        <p className="bio">
          {bioContent}
        </p>

        <div className="resume">
          <a
            href={`${process.env.PUBLIC_URL}/assets/Austin_Liu_Resume.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              RESUME
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
