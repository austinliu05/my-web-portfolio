import React from 'react';
import GridSection from './grid_section';
import './skills.css'
const languages = [
    { name: 'Python', imageUrl: 'languages/python.png' },
    { name: 'C++', imageUrl: 'languages/c++.png' },
    { name: 'Java', imageUrl: 'languages/java.png' },
    { name: 'TypeScript', imageUrl: 'languages/typescript.png' },
    { name: 'JavaScript', imageUrl: 'languages/javascript.png' }
];
const web_development = [
    { name: 'React', imageUrl: 'web_development/react.png' },
    { name: 'Flask', imageUrl: 'web_development/flask.jpg' },
    {name: 'NodeJS', imageUrl: 'web_development/nodejs.png'},
    {name: 'Bootstrap', imageUrl: 'web_development/bootstrap.svg'},
    {name: 'Django', imageUrl: 'web_development/django.png'}
];
const ML_libs = [
    { name: 'OpenCV', imageUrl: 'ML_libs/opencv.jpeg' },
    { name: 'Tensorflow', imageUrl: 'ML_libs/tensorflow.jpg' },
    {name: 'Keras', imageUrl: 'ML_libs/keras.png'},
];
const tools = [
    { name: 'Firebase', imageUrl: 'tools/firebase.png' },
    { name: 'AWS', imageUrl: 'tools/aws.webp' },
    { name: 'GCP', imageUrl: 'tools/gcp.png' },
    { name: 'GitHub', imageUrl: 'tools/github.png' },
    { name: 'GitLab', imageUrl: 'tools/gitlab.png' },
    { name: 'Postman', imageUrl: 'tools/postman.jpg'}
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="section-skills">
            <div className='skills-container'>
                <h1>Skills</h1>
            </div>
            <div className='icon-container'>
                <GridSection title="Languages" items={languages} />
                <GridSection title="Web Development" items={web_development} />
                <GridSection title="Machine Learning" items={ML_libs} />
                <GridSection title="Tools" items={tools} />
            </div>
        </section>
    );
};

export default SkillsSection;
