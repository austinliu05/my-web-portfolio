import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slideshow.css";
import { ASSETS_BASE_PATH, ASSETS_SKILLS_BASE_PATH } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Slide {
    title: string;
    description: string;
    role?: string;
    date?: string;
    imageURL: string;
    websiteURL?: string;
    githubURL?: string;
    skills?: string[];  // Array for tech stack icons
    techStack?: string[];  // Array for tech stack icons
}

interface SlideshowProps {
    items: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ items }) => {
    const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
        <button
            className={`custom-arrow custom-arrow-left ${hasPrev ? "" : "disabled"}`}
            onClick={onClickHandler}
            aria-label="Previous Slide"
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );

    const renderArrowNext = (onClickHandler: () => void, hasNext: boolean) => (
        <button
            className={`custom-arrow custom-arrow-right ${hasNext ? "" : "disabled"}`}
            onClick={onClickHandler}
            aria-label="Next Slide"
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );

    return (
        <div className="slideshow-wrapper">
            <Carousel
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                interval={5000}
                transitionTime={600}
                swipeable={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="slide-content">
                            <div className="slide-images">
                                <img
                                    src={`${ASSETS_BASE_PATH}${item.imageURL}`}
                                    alt={item.title}
                                />
                                {/* Tech Stack Section */}
                                {item.techStack && item.techStack.length > 0 && (
                                    <div className="tech-stack-row">
                                        <p>Tech Stack: </p>
                                        {item.techStack.map((tech, i) => (
                                            <div
                                                key={i}
                                                className="tech-icon-container"
                                                data-tooltip={item.skills ? item.skills[i] : ""}
                                            >
                                                <img
                                                    src={`${ASSETS_SKILLS_BASE_PATH}/${tech}`}
                                                    alt={tech}
                                                    className="tech-icon"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                            <div className="slide-metadata">
                                <h2>{item.title}</h2>
                                {item.role && item.date && (
                                    <p>{item.role} • {item.date}</p>
                                )}
                                <p>{item.description}</p>
                                <div className="slide-buttons">
                                    {item.websiteURL && (
                                        <a
                                            href={item.websiteURL}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="slideshow-button">
                                                Visit Website
                                            </button>
                                        </a>
                                    )}
                                    {item.githubURL && (
                                        <a
                                            href={item.githubURL}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
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
        </div>
    );
};

export default Slideshow;
