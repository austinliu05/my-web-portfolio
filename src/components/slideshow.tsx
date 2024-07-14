import React, { useState } from "react";
import "./slideshow.css";
import { ASSETS_BASE_PATH } from '../constants';


interface Slide {
    title: string;
    description: string;
    role: string;
    date: string;
    imageURL: string;
    websiteURL: string;
    videoURL: string;
}

interface SlideshowProps {
    items: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const lastIndex = items.length - 1;
        const resetIndex = currentIndex === 0;
        const index = resetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = items.length - 1;
        const resetIndex = currentIndex === lastIndex;
        const index = resetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const currentItem = items[currentIndex];

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                <button className="arrow left-arrow" onClick={previousSlide}>
                    &#10094;
                </button>
                <div className="proj-exp">
                    <img src={`${ASSETS_BASE_PATH}${currentItem.imageURL}`} alt={currentItem.title} />
                    <div className="slideshow-metadata">
                        <h2>{currentItem.title}</h2>
                        <p>{currentItem.role}    •   {currentItem.date}</p>
                        <p>{currentItem.description}</p>
                        <div className="proj-exp-buttons">
                            {currentItem.websiteURL && (
                                <a href={currentItem.websiteURL} target="_blank" rel="noreferrer">
                                    <button className="proj-exp-button">Visit Website</button>
                                </a>
                            )}
                            {currentItem.videoURL && (
                                <a href={currentItem.videoURL} target="_blank" rel="noreferrer">
                                    <button className="proj-exp-button">Watch Demo</button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <button className="arrow right-arrow" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
