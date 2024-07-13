import React from 'react';
import Slideshow from '../slideshow'

const projectItems = [
  {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "path/to/project1-image.jpg",
  },
  {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "path/to/project2-image.jpg",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="section-projects">
      <div className='container'>
        <h1>Projects</h1>
      </div>
      <Slideshow items={projectItems}/>
    </section>
  );
};

export default ProjectsSection;
