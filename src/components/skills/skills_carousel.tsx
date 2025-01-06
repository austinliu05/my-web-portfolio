import React from 'react';
import './skills_carousel.css';
import { ASSETS_SKILLS_BASE_PATH } from '../../constants';

const skills = [
    { name: 'Python', imageUrl: 'languages/python.png' },
    { name: 'C++', imageUrl: 'languages/c++.png' },
    { name: 'Java', imageUrl: 'languages/java.png' },
    { name: 'TypeScript', imageUrl: 'languages/typescript.png' },
    { name: 'React', imageUrl: 'web_development/react.png' },
    { name: 'React Expo', imageUrl: 'web_development/react-expo.png' },
    { name: 'Flask', imageUrl: 'web_development/flask.png' },
    { name: 'Django', imageUrl: 'web_development/django.png' },
    { name: 'NodeJS', imageUrl: 'web_development/nodejs.png' },
    { name: 'Bootstrap', imageUrl: 'web_development/bootstrap.svg' },
    { name: 'Tailwind CSS', imageUrl: 'web_development/tailwindcss.png' },
    { name: 'Firebase', imageUrl: 'web_development/firebase.png' },
    { name: 'AWS', imageUrl: 'web_development/aws.webp' },
    { name: 'GCP', imageUrl: 'web_development/gcp.png' },
    { name: 'GitHub', imageUrl: 'web_development/github.png' },
];

const SkillsCarousel: React.FC = () => {
    return (
        <section id="skills" className="skills-carousel">
            <div className="skills-title">
                <h2>Technical Skills</h2>
            </div>
            <div className="carousel-wrapper">
                <div className="carousel">
                    {skills.map((skill, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={`${ASSETS_SKILLS_BASE_PATH}${skill.imageUrl}`} alt={skill.name} />
                            <div className="tooltip">{skill.name}</div>
                        </div>
                    ))}
                    {skills.map((skill, index) => (
                        <div className="carousel-item" key={`duplicate-${index}`}>
                            <img src={`${ASSETS_SKILLS_BASE_PATH}${skill.imageUrl}`} alt={skill.name} />
                            <div className="tooltip">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsCarousel;
