import React from 'react';
import Slideshow from '../slideshow'

const experienceItems = [
  {
    title: "sai (Student AI)",
    role: "Software Engineer Intern",
    date: "November  2024 - Current",
    description: "Designing and implementing AI-powered application to enhance learning management systems (e.g., Canvas, Blackboard). Spearheading integrations for campuses across the U.S., including Cornell, UPenn, NYU, and Dartmouth, to improve educational workflows and student engagement. Using MERN framework (MongoDB, Express.js, React.js, Node.js) to build scalable  solutions, ensuring seamless user experiences and efficient backend operations.",
    imageURL: "experiences/sai-logo.png",
    websiteURL: "https://sai.com.ai/",
    videoURL: "",
    githubURL: ""
  },
  {
    title: "Stealth Startup",
    role: "Software Engineer Intern",
    date: "June  2024 - August 2024",
    description: "Developed an MVP for stealth startup, focusing on backend architecture. Implemented CRUD functionalities, enabling seamless management of data through NodeJS server. The backend was integrated with ChatGPT's API for advanced smoothie personalization, Edamam's API for nutritional data, and Firebase for real-time database storage and user authentication.",
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
    description: "Participated in daily stand-up meetings to support agile software development. Enhanced product development by conducting SPIKEs on industry-standard APIs, designing configuration YAML files, and implementing solutions such as Google’s NLP API. Automated development operations, including scripting GCP SSL certificate renewal. Conducted Quality Assurance (QA) reviews on merge requests to enforce team practices and adherence to industry standards.",
    imageURL: "experiences/mdp-logo.png",
    websiteURL: "https://www.linkedin.com/company/mydataproduct/",
    videoURL: "",
    githubURL: ""
  },
  {
    title: "Brown Technology and Consulting Group",
    role: "VP of Technology",
    date: "September 2023 - Current",
    description: "Oversee the club’s website (using React) and provide expert guidance on all software-related inquiries. Also revamped revenue model for social media influencer marketplace startup by performing competitor analysis,assessing current value proposition, and formulating a detailed recommendation.",
    imageURL: "experiences/btcg-homepage.png",
    websiteURL: "https://browntechnologyconsultinggroup.com/",
    videoURL: "",
    githubURL: ""
  },
];
const ExperiencesSection: React.FC = () => {
  return (
    <section className="section-experiences">
      <div className='container'>
        <h1>Experiences</h1>
      </div>
      <Slideshow items={experienceItems} />
    </section>
  );
};

export default ExperiencesSection;
