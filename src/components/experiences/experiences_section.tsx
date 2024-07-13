import React from 'react';
import Slideshow from '../slideshow'

const experienceItems = [
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
const ExperiencesSection: React.FC = () => {
  return (
    <section className="section-experiences">
      <div className='container'>
        <h1>Experiences</h1>
      </div>
      <Slideshow items={experienceItems}/>
    </section>
  );
};

export default ExperiencesSection;
