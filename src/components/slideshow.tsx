import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import { Carousel } from "react-responsive-carousel";
import "./slideshow.css";  // your existing stylesheet
import { ASSETS_BASE_PATH } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    return (
        <div className="slideshow-wrapper">
            <Carousel
                // Some handy props:
                showArrows={false}
                showStatus={true}        // hides the "1 of N" status
                showIndicators={true}     // show dots (indicators)
                showThumbs={false}        // no thumbnail images
                infiniteLoop={true}
                autoPlay={false}          // set to true if you'd like to autoplay
                interval={5000}
                transitionTime={600}
                swipeable={true}
                emulateTouch={true}
                useKeyboardArrows={true}
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="proj-exp">
                            <img
                                src={`${ASSETS_BASE_PATH}${item.imageURL}`}
                                alt={item.title}
                            />
                            <div className="slideshow-metadata">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.role} • {item.date}
                                </p>
                                <p>{item.description}</p>

                                <div className="proj-exp-buttons">
                                    {item.websiteURL && (
                                        <a
                                            href={item.websiteURL}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="proj-exp-button">
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
                                            <button className="proj-exp-button github-button">
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
