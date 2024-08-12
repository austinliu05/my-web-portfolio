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

const frameworks = [
    { name: 'Flask', imageUrl: 'frameworks/react.png' },
    { name: 'React', imageUrl: 'frameworks/flask.jpg' },
    {name: 'NodeJS', imageUrl: 'frameworks/nodejs.png'}
];

const tools = [
    { name: 'GitHub', imageUrl: 'tools/github.png' },
    { name: 'GitLab', imageUrl: 'tools/gitlab.png' },
    { name: 'Firebase', imageUrl: 'tools/firebase.png' },
    { name: 'AWS', imageUrl: 'tools/aws.webp' },
    { name: 'GCP', imageUrl: 'tools/gcp.png' },
    { name: 'Postman', imageUrl: 'tools/postman.jpg'}
];

const SkillsSection: React.FC = () => {
    return (
        <section className="section-skills">
            <div className='skills-container'>
                <h1>Skills</h1>
            </div>
            <div className='icon-container'>
                <GridSection title="Languages" items={languages} />
                <GridSection title="Frameworks" items={frameworks} />
                <GridSection title="Tools" items={tools} />
            </div>
        </section>
    );
};

export default SkillsSection;
