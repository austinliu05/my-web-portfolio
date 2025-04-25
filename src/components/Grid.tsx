import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "./types";
import { ASSETS_BASE_PATH } from "../constants";
import "./Grid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

interface GridProps {
    items: ProjectItem[];
}

// Variants for the card animation
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Variants for the container that staggers child animations
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Grid: React.FC<GridProps> = ({ items }) => {
    // State to track the current modal image URL
    const [modalImage, setModalImage] = useState<string>("");
    const [showModal, setShowModal] = useState(false);

    // Handler to show the diagram image modal on click if diagramURL exists
    const handleCardClick = (diagramURL?: string) => {
        if (diagramURL) {
            setModalImage(diagramURL);
            setShowModal(true);
        }
    };

    return (
        <>
            <motion.div
                className="project-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {items.map((item) => (
                    <motion.div
                        key={item.title}
                        className="project-card"
                        variants={cardVariants}
                    >
                        <div className="image-container">
                            <img
                                src={`${ASSETS_BASE_PATH}${item.gridImageURL ? item.gridImageURL : item.imageURL}`}
                                alt={item.title}
                                className="project-image"
                            />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">{item.title}</h3>
                            <p className="project-role">
                                {item.role} • {item.date}
                            </p>
                            <p className="project-description">{item.description}</p>
                            <div className={`project-buttons ${item.githubURL ? "github-exists" : ""}`}>
                                {item.websiteURL && (
                                    <a href={item.websiteURL} target="_blank" rel="noreferrer">
                                        <button className={`project-button ${item.githubURL ? "github-exists" : ""}`}>
                                            Visit Website
                                        </button>
                                    </a>
                                )}
                                {item.videoURL && (
                                    <a href={item.videoURL} target="_blank" rel="noreferrer">
                                        <button className={`project-button ${item.githubURL ? "github-exists" : ""}`}>
                                            Watch Demo
                                        </button>
                                    </a>
                                )}
                                {item.diagramURL && (
                                    <button
                                        className={`project-button ${item.githubURL ? "github-exists" : ""}`}
                                        onClick={() => handleCardClick(item.diagramURL)}
                                    >
                                        <FontAwesomeIcon icon={faDiagramProject} size="lg" />
                                    </button>
                                )}
                                {item.githubURL && (
                                    <a href={item.githubURL} target="_blank" rel="noreferrer">
                                        <button className="project-button github-button">
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
                {showModal && modalImage && (
                    <div className="modal-overlay" onClick={() => setShowModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-button" onClick={() => setShowModal(false)}>×</button>
                            <img src={`${ASSETS_BASE_PATH}${modalImage}`} alt="Diagram" className="modal-image" />
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default Grid;
