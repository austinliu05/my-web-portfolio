import React from 'react';
import Slideshow from '../slideshow'

const experienceItems = [
  {
    title: "Stealth Startup",
    role: "Back End Developer",
    date: "June  2024 - Current",
    description: "Developing MVP for a stealth startup, with a primary focus on backend architecture. Programmed front-end buttons to connect with a Flask server, and integrated the ChatGPT API and Firebase to store valuable user information.",
    imageURL: "experiences/bonsai-architecture.png",
    websiteURL: "https://www.kognitivedge.com/",
    videoURL: "",
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
