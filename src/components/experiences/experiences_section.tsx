import Slideshow from '../slideshow'
import React, { useState } from 'react';
import Grid from '../Grid';

const experienceItems = [
  {
    title: "Symbotic",
    role: "Software Engineer Intern",
    date: "Incoming Summer 2025",
    description: "Data Services.",
    imageURL: "experiences/symbotic-logo.jpg",
    websiteURL: "https://www.symbotic.com/",
    videoURL: "",
    githubURL: "",
    skills: ["C#", "SQL"],
    techStack: ["languages/c-sharp.png", "languages/sql.png"]
  },
  {
    title: "Helios Technologies",
    role: "Software Engineer Intern",
    date: "Feb.  2025 - Current",
    description: "AI chatbots and more.",
    imageURL: "experiences/helios-logo.png",
    gridImageURL: "experiences/grid-helios-logo.png",
    websiteURL: "https://www.heliostechnologies.ai/",
    videoURL: "",
    githubURL: "",
    skills: ["React", "Python"],
    techStack: ["web_development/react.png", "languages/python.png"]
  },
  {
    title: "sai (Study AI)",
    role: "Software Engineer Intern",
    date: "Nov.  2024 - Current",
    description: "Designing AI-powered application to enhance learning management systems (e.g. Canvas, Blackboard). Spearheading integrations for campuses across the U.S., including Cornell, UPenn, NYU, and Dartmouth, to improve educational workflows. Using MERN framework to build scalable  solutions, ensuring seamless user experiences and efficient backend operations.",
    imageURL: "experiences/sai-logo.png",
    gridImageURL: "experiences/grid-sai-logo.png",
    websiteURL: "https://sai.com.ai/",
    videoURL: "",
    githubURL: "",
    skills: ["React", "Next JS", "Mongo DB", "Firebase", "ChatGPT", "Stripe"],
    techStack: ["web_development/react.png", "web_development/nextjs.png", "web_development/mongodb.svg","web_development/firebase.png", "web_development/chatgpt.jpg",  "web_development/stripe.jpg",]
  },
  {
    title: "Stealth Startup",
    role: "Software Engineer Intern",
    date: "June  2024 - Aug. 2024",
    description: "Developed an MVP for startup. Implemented CRUD functionalities through NodeJS server. Integrated backend with ChatGPT's API for advanced smoothie personalization, Edamam's API for nutritional data, and Firebase for real-time database storage.",
    imageURL: "experiences/bonsai-architecture.png",
    websiteURL: "",
    videoURL: "https://www.youtube.com/watch?v=rdxR_WoPFOo",
    githubURL: "",
    skills: ["React Expo", "NodeJS", "Firebase", "ChatGPT", "Edamam"],
    techStack: ["web_development/react-expo.png", "web_development/nodejs.jpg","web_development/firebase.png", "web_development/chatgpt.jpg",  "web_development/edamam.png",]
  },
  {
    title: "MyDataProduct",
    role: "Software Engineering Intern",
    date: "Feb. 2024 - May 2024",
    description: "Participated in daily stand-ups to support agile software development. Enhanced  devlopment by conducting SPIKEs on industry-standard APIs, and designing config YAML files with consideration for downstream impact. Automated development operations, including scripting GCP SSL certificate renewal and conducted Quality Assurance (QA) reviews on merge requests.",
    imageURL: "experiences/mdp-logo.png",
    gridImageURL: "experiences/grid-mdp-logo.png",
    websiteURL: "https://www.linkedin.com/company/mydataproduct/",
    videoURL: "",
    githubURL: "",
    skills: ["React", "Flask", "GCP"],
    techStack: ["web_development/react.png", "web_development/flask.jpg","web_development/gcp.png",]
  },
  {
    title: "Brown Technology and Consulting Group",
    role: "VP of Technology",
    date: "Sept. 2023 - Current",
    description: "Oversee club website (using React) and provide expert guidance on all software-related inquiries. Revamped revenue model for social media influencer marketplace startup. Consulted for largest South Korean self storage company.",
    imageURL: "experiences/btcg-homepage.png",
    websiteURL: "https://browntechnologyconsultinggroup.com/",
    videoURL: "",
    githubURL: "",
    skills: ["React", "Flask", "GCP"],
    techStack: ["web_development/react.png"]
  },
];

type ViewMode = "slideshow" | "grid";


const ExperiencesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <section id="experiences" className="section-experiences">
      <div className='container'>
      <div className='title-container'>
          <h1>Experiences</h1>
          <div className="view-toggle-experiences">
            <button
              onClick={() => setViewMode("slideshow")}
              className={viewMode === "slideshow" ? "active" : ""}
            >
              Slideshow
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "active" : ""}
            >
              Grid
            </button>
          </div>
        </div>
      </div>
      {viewMode === "slideshow" ? (
        <Slideshow items={experienceItems} />
      ) : (
        <Grid items={experienceItems} />
      )}
    </section>
  );
};

export default ExperiencesSection;
