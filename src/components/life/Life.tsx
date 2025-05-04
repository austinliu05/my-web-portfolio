import React, { useState } from "react";
import MediaSlider from "./MediaSlider";
import './Life.css'
import { MediaItem } from "./MediaSlider";
export interface Gallery {
    title: string;
    items: MediaItem[];

}

const galleries: Gallery[] = [
    {
        title: "5/4 Providence Half Marathon",
        items: [
            { id: 1, src: "/assets/life/marathon/marathon1.JPG", type: "image", orientation: "vertical"},
            { id: 2, src: "/assets/life/marathon/marathon2.JPG", type: "image", orientation: "vertical"},
            { id: 3, src: "/assets/life/marathon/marathon3.JPG", type: "image", orientation: "vertical"},
            { id: 4, src: "/assets/life/marathon/marathon4.JPG", type: "image", orientation: "vertical"},

        ],
    },
    {
        title: "Volleyball",
        items: [
            { id: 1, src: "/assets/life/vball/vball1.mp4", type: "video", orientation: "vertical"},
            { id: 2, src: "/assets/life/vball/vball2.mp4", type: "video", orientation: "horizontal"},
            { id: 3, src: "/assets/life/vball/vball3.mp4", type: "video", orientation: "horizontal"},
        ],
    },
];


/**
 * LifeSection displays multiple galleries (each with its own MediaSlider) in a carousel.
 */
const LifeSection: React.FC = () => {
    const [activeGallery, setActiveGallery] = useState<number>(0);

    const nextGallery = () => {
        setActiveGallery((prev) => (prev + 1) % galleries.length);
    };
    const prevGallery = () => {
        setActiveGallery((prev) => (prev - 1 + galleries.length) % galleries.length);
    };

    return (
        <section id="life" className="life">
            <h2 className="gallery-title">{galleries[activeGallery].title}</h2>
            <div className="carousel-controls">
                <button onClick={prevGallery}>Prev Gallery</button>
                <button onClick={nextGallery}>Next Gallery</button>
            </div>
            <div className="carousel-slider">
                <MediaSlider items={galleries[activeGallery].items} />
            </div>
        </section>
    );
};

export default LifeSection;
