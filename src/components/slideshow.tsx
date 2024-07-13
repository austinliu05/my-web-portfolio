import React, { useState } from "react";
import "./slideshow.css";

interface Slide {
    title: string;
    description: string;
    imageUrl: string;
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
        <div className="parent-container">
            <div className="slideshow">
                <button className="arrow left-arrow" onClick={previousSlide}>
                    &#10094;
                </button>
                <div className="project">
                    <img src={currentItem.imageUrl} alt={currentItem.title} />
                    <h2>{currentItem.title}</h2>
                    <p>{currentItem.description}</p>
                </div>
                <button className="arrow right-arrow" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slideshow;
