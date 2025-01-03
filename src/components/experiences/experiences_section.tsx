import React from 'react';
import Slideshow from '../slideshow'

const experienceItems = [
  {
    title: "sai (Student AI)",
    role: "Software Engineer Intern",
    date: "November  2024 - Current",
    description: "Designing AI-powered application to enhance learning management systems (e.g. Canvas, Blackboard). Spearheading integrations for campuses across the U.S., including Cornell, UPenn, NYU, and Dartmouth, to improve educational workflows. Using MERN framework to build scalable  solutions, ensuring seamless user experiences and efficient backend operations.",
    imageURL: "experiences/sai-logo.png",
    websiteURL: "https://sai.com.ai/",
    videoURL: "",
    githubURL: ""
  },
  {
    title: "Stealth Startup",
    role: "Software Engineer Intern",
    date: "June  2024 - August 2024",
    description: "Developed an MVP for startup. Implemented CRUD functionalities through NodeJS server. Integrated backend with ChatGPT's API for advanced smoothie personalization, Edamam's API for nutritional data, and Firebase for real-time database storage.",
    imageURL: "experiences/bonsai-architecture.png",
    websiteURL: "",
    videoURL: "https://www.youtube.com/watch?v=rdxR_WoPFOo",
    githubURL: ""
  },
  {
    title: "Kognitiv Edge",
    role: "Back End Intern",
    date: "March  2024 - May 2024",
    description: "Developed CI/CD pipelines to ensure smooth deployments from development to production environments. Worked with various services including Azure, Terraform, and GitHub Actions.",
    imageURL: "experiences/kogedge-homepage.png",
    websiteURL: "https://www.kognitivedge.com/",
    videoURL: "",
    githubURL: ""
  },
  {
    title: "MyDataProduct",
    role: "Data Product Engineering Intern",
    date: "February 2024 - May 2024",
    description: "Participated in daily stand-ups to support agile software development. Enhanced  devlopment by conducting SPIKEs on industry-standard APIs, and designing config YAML files with consideration for downstream impact. Automated development operations, including scripting GCP SSL certificate renewal and conducted Quality Assurance (QA) reviews on merge requests.",
    imageURL: "experiences/mdp-logo.png",
    websiteURL: "https://www.linkedin.com/company/mydataproduct/",
    videoURL: "",
    githubURL: ""
  },
  {
    title: "Brown Technology and Consulting Group",
    role: "VP of Technology",
    date: "September 2023 - Current",
    description: "Oversee club website (using React) and provide expert guidance on all software-related inquiries. Revamped revenue model for social media influencer marketplace startup. Consulted for largest South Korean self storage company..",
    imageURL: "experiences/btcg-homepage.png",
    websiteURL: "https://browntechnologyconsultinggroup.com/",
    videoURL: "",
    githubURL: ""
  },
];
const ExperiencesSection: React.FC = () => {
  return (
    <section id="experiences" className="section-experiences">
      <div className='container'>
        <h1>Experiences</h1>
      </div>
      <Slideshow items={experienceItems} />
    </section>
  );
};

export default ExperiencesSection;
