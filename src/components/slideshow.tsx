import React, { useState } from "react";
import "./slideshow.css";
import { ASSETS_BASE_PATH } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Slide {
    title: string;
    description: string;
    role: string;
    date: string;
    imageURL: string;
    websiteURL: string;
    videoURL: string;
    githubURL: string;
}

interface SlideshowProps {
    items: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const lastIndex = items.length - 1;
        setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    };

    const nextSlide = () => {
        const lastIndex = items.length - 1;
        setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const currentItem = items[currentIndex];

    return (
        <div className="slideshow-wrapper">
            <div className="slideshow-container">
                <div className="slideshow">
                    <button className="arrow left-arrow" onClick={previousSlide}>
                        &#10094;
                    </button>
                    <div className="proj-exp">
                        <img src={`${ASSETS_BASE_PATH}${currentItem.imageURL}`} alt={currentItem.title} />
                        <div className="slideshow-metadata">
                            <h2>{currentItem.title}</h2>
                            <p>{currentItem.role} • {currentItem.date}</p>
                            <p>{currentItem.description}</p>
                            <div className="proj-exp-buttons">
                                {currentItem.websiteURL && (
                                    <a href={currentItem.websiteURL} target="_blank" rel="noreferrer">
                                        <button className="proj-exp-button">Visit Website</button>
                                    </a>
                                )}
                                {currentItem.githubURL && (
                                    <a href={currentItem.githubURL} target="_blank" rel="noreferrer">
                                        <button className="proj-exp-button github-button">
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="arrow right-arrow" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
    
                {/* Dots Navigation */}
                <div className="dots-container">
                    {items.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );    
};

export default Slideshow;
