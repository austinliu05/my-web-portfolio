import React from 'react';
import Slideshow from '../slideshow'

const experienceItems = [
  {
      title: "Kognitiv Edge",
      role: "Back End Intern",
      date: "March  2024 - May 2024",
      description: "Description of Project 1",
      imageURL: "experiences/kogedge-homepage.png",
      websiteURL:"https://www.kognitivedge.com/",
      videoURL:"",
  },
  {
      title: "MyDataProduct",
      role: "Data Product Engineering Intern",
      date: "February 2024 - May 2024",
      description: "Description of Project 2",
      imageURL: "experiences/mdp-logo.png",
      websiteURL:"https://www.linkedin.com/company/mydataproduct/",
      videoURL:"",
  },
  {
    title: "Brown Technology and Consulting Group",
    role: "VP of Technology",
    date: "September 2023 - Current",
    description: "Description of Project 2",
    imageURL: "experiences/btcg-homepage.png",
    websiteURL:"https://browntechnologyconsultinggroup.com/",
    videoURL:"",
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
