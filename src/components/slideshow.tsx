import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slideshow.css";
import { ASSETS_BASE_PATH, ASSETS_SKILLS_BASE_PATH } from "../constants";

interface Slide {
    title: string;
    description: string;
    role?: string;
    date?: string;
    imageURL: string;
    websiteURL?: string;
    videoURL?: string;
    githubURL?: string;
    skills?: string[];
    techStack?: string[];
    diagramURL?: string;
}

interface SlideshowProps {
    items: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ items }) => {
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = (imageURL: string) => {
        setModalImage(imageURL);
        setShowModal(true);
    };

    const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
        <button className={`custom-arrow custom-arrow-left ${hasPrev ? "" : "disabled"}`} onClick={onClickHandler} aria-label="Previous Slide">
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );

    const renderArrowNext = (onClickHandler: () => void, hasNext: boolean) => (
        <button className={`custom-arrow custom-arrow-right ${hasNext ? "" : "disabled"}`} onClick={onClickHandler} aria-label="Next Slide">
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );

    return (
        <div className="slideshow-wrapper">
            <Carousel
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop
                autoPlay={false}
                interval={5000}
                transitionTime={600}
                swipeable
                emulateTouch
                useKeyboardArrows
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="slide-content">
                            <div className="slide-images">
                                <img src={`${ASSETS_BASE_PATH}${item.imageURL}`} alt={item.title} />
                                {item.techStack?.length && item.techStack?.length > 0 && (
                                    <div className="tech-stack-row">
                                        <p>Tech Stack:</p>
                                        {item.techStack.map((tech, i) => (
                                            <div key={i} className="tech-icon-container" data-tooltip={item.skills?.[i] || ""}>
                                                <img src={`${ASSETS_SKILLS_BASE_PATH}/${tech}`} alt={tech} className="tech-icon" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="slide-metadata">
                                <h2>{item.title}</h2>
                                {item.role && item.date && <p>{item.role} • {item.date}</p>}
                                <p>{item.description}</p>
                                <div className={`slide-buttons ${item.githubURL ? "github-exists" : ""}`}>
                                    {item.websiteURL && (
                                        <a href={item.websiteURL} target="_blank" rel="noreferrer">
                                            <button className={`slideshow-button ${item.githubURL ? "github-exists" : ""}`}>Visit Website</button>
                                        </a>
                                    )}
                                    {item.videoURL && (
                                        <a href={item.videoURL} target="_blank" rel="noreferrer">
                                            <button className={`slideshow-button ${item.githubURL ? "github-exists" : ""}`}>Watch Demo</button>
                                        </a>
                                    )}
                                    {item.diagramURL && (
                                        <button
                                            className={`project-button ${item.githubURL ? "github-exists" : ""}`}
                                            onClick={() => handleCardClick(item.diagramURL!)}
                                        >
                                            <FontAwesomeIcon icon={faDiagramProject} size="lg" />
                                        </button>
                                    )}
                                    {item.githubURL && (
                                        <a href={item.githubURL} target="_blank" rel="noreferrer">
                                            <button className="slideshow-button github-button">
                                                <FontAwesomeIcon icon={faGithub} size="lg" />
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Modal Image Viewer */}
            {showModal && modalImage && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-button" onClick={() => setShowModal(false)}>×</button>
                        <img src={`${ASSETS_BASE_PATH}${modalImage}`} alt="Diagram" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slideshow;
