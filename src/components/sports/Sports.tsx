import React, { useState } from "react";
import MediaSlider from "./MediaSlider";
import './Sports.css';

import { MediaItem } from "./MediaSlider";
export interface Gallery {
    title: string;
    items: MediaItem[];
}

const galleries: Gallery[] = [
    {
        title: "Volleyball",
        items: [
            { id: 1, src: "/assets/sports/vball/vball1.mp4", type: "video", orientation: "vertical" },
            { id: 2, src: "/assets/sports/vball/vball2.mp4", type: "video", orientation: "horizontal" },
            { id: 3, src: "/assets/sports/vball/vball3.mp4", type: "video", orientation: "horizontal" },
        ],
    },
    {
        title: "Vert Training",
        items: [
            { id: 1, src: "/assets/sports/vert/vert1.mp4", type: "video", orientation: "vertical" },
            { id: 2, src: "/assets/sports/vert/vert2.mp4", type: "video", orientation: "vertical" },
        ],
    },
];

/**
 * SportsSection displays multiple galleries (each with its own MediaSlider) in a carousel.
 */
const SportsSection: React.FC = () => {
    const [activeGallery, setActiveGallery] = useState<number>(0);

    const nextGallery = () => {
        setActiveGallery((prev) => (prev + 1) % galleries.length);
    };
    const prevGallery = () => {
        setActiveGallery((prev) => (prev - 1 + galleries.length) % galleries.length);
    };

    return (
        <section id="about-me" className="sports-section">
            <h2 className="gallery-title">More About Me</h2>
            <p className="intro">
                Outside of school, I love staying active and pushing my physical limits!            
            </p>
            <div className="carousel-controls">
                <button onClick={prevGallery} aria-label="Previous Gallery">Prev</button>
                <button onClick={nextGallery} aria-label="Next Gallery">Next</button>
            </div>
            <div className="carousel-slider">
                <MediaSlider items={galleries[activeGallery].items} />
            </div>
        </section>
    );
};

export default SportsSection;
