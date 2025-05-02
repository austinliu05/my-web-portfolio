import React, { useState } from 'react';
import Slideshow from '../slideshow';
import Grid from '../Grid';
import ToggleSwitch from '../ToggleSwitch';

const projectItems = [
  {
    title: "Music Sheets to MIDI Files",
    role: "Researcher",
    date: "Feb. 2025 - May 2025",
    description: "This is my CSCI 1470 Deep Learning Final Project. We built an End-to-end Optical Music Recognition system that extracted noteheads from music sheets using OpenCV, trained multiple CNNs to classify them and devised a custom algorithm to calculate the pitches of the notes.",
    imageURL: "projects/final-project-poster.png",
    websiteURL: "",
    videoURL: "",
    githubURL: "https://github.com/austinliu05/brown-dl-s25-final-project",
    skills: ["OpenCV", "TensorFlow"],
    techStack: ["ML_libs/opencv.png", "ML_libs/tensorflow.png"],
    diagramURL: "projects/final-project-poster.png"
  },
  {
    title: "Beya",
    role: "Founding Software Engineer",
    date: "Nov. 2024 - Current",
    description: "Supporting small businesses with inventory management, event and locales proximity-based features, minimum-fee transactions, and analytics. Startup @ Brown. App store release soon!",
    imageURL: "projects/beya-logo.png",
    websiteURL: "https://usebeya.com/",
    videoURL: "",
    githubURL: "",
    skills: ["React Expo", "Tailwind CSS", "Firebase", "AWS", "Stripe"],
    techStack: ["web_development/react-expo.png", "web_development/tailwindcss.png", "web_development/firebase.png", "web_development/aws.jpg", "web_development/stripe.jpg",]
  },
  {
    title: "Brown Formula Racing Team",
    role: "Lead Backend Engineer",
    date: "Oct. 2024 - Current",
    description: "Building a driving data application to optimize driver performance and testing workflows. Managing cloud infrastructure, deploying services on AWS EC2 with load balancing for production-grade reliability. Utilizing S3 for storing car diagnostics, while leveraging Firebase Firestore to manage racing data, driver profiles, and issue logs.",
    imageURL: "projects/brown-fsae.png",
    websiteURL: "https://sites.google.com/brown.edu/fsae/home",
    // videoURL: "https://brown-fsae.vercel.app",
    videoURL: "",
    githubURL: "https://github.com/ethany202/Brown-FSAE-Driving-Day-App",
    skills: ["React", "Tailwind CSS", "Firebase", "AWS"],
    techStack: ["web_development/react.png", "web_development/tailwindcss.png", "web_development/firebase.png", "web_development/aws.jpg"],
    diagramURL: "projects/brown-fsae-architecture.png"
  },
  {
    title: "Guitar Tab Transformer",
    role: "Researcher",
    date: "June 2024 - Current",
    description: "As an avid guitarist, I've decided to take on the challenge of designing a custom neural network to automatically transpose any song into guitar tabs from the audio file. I am currently collaborating with Claude Hu, a machine learning researcher at University of Virginia.",
    imageURL: "projects/guitar-tab-transformer.jpeg",
    websiteURL: "https://guitar-tab-transformer.vercel.app/",
    videoURL: "",
    githubURL: "https://github.com/austinliu05/guitar-tab-transformer",
    skills: ["React", "Django", "OpenCV"],
    techStack: ["web_development/react.png", "web_development/django.png", "ML_libs/opencv.png"]
  },
  {
    title: "Pay Your Friend",
    role: "Individual Contributor",
    date: "Feb. 2025 - Feb. 2025",
    description: "This internal tool was designed exclusively for my 12 friends and me. It streamlines the process of tracking who owes what, keeping our finances transparent and hassle-free. I implemented a daily email reminder along with fun analytics to keep people accountable. Currently working on scaling the project.",
    imageURL: "projects/pay-your-friend.png",
    websiteURL: "",
    videoURL: "https://youtu.be/xPVssnxfOVs",
    githubURL: "https://github.com/austinliu05/pay-your-friends",
    skills: ["React", "Bootstrap", "Firebase", "NodeJS"],
    techStack: ["web_development/react.png", "web_development/bootstrap.svg", "web_development/firebase.png", "web_development/nodejs.jpg"]
  },
  {
    title: "WordHunt Online",
    role: "Individual Contributor",
    date: "Oct. 2024 - Nov. 2024",
    description: "Inspired by the WordHunt game on GamePigeon, I developed a lightweight web version using React, Node.js, and Firebase. The application includes core gameplay mechanics, and I’m currently working on adding AI-driven bot difficulty levels and a real-time multiplayer system.",
    imageURL: "projects/wordhunt-online.png",
    websiteURL: "https://wordhunt-online.vercel.app/",
    videoURL: "https://youtu.be/TtuDezyLU9g",
    githubURL: "https://github.com/austinliu05/wordhunt-online",
    skills: ["React", "Bootstrap", "Firebase", "NodeJS", "Socket.IO"],
    techStack: ["web_development/react.png", "web_development/bootstrap.svg", "web_development/firebase.png", "web_development/nodejs.jpg", "web_development/socketio.png",]
  },
  {
    title: "Find My Food",
    role: "Individual Contributor",
    date: "Jan. 2024 - May 2024",
    description: "A web application that streamlines the search for dining hall meals. The web scraping functionality leverages AWS Lambda, and uploads information to a AWS RDS instance, which is has been optimized with a cron job to lower monthly costs. The project employs Jest and Pytest within GitHub Actions for automated testing and deployment.",
    imageURL: "projects/findmyfood-architecture.png",
    websiteURL: "",
    // https://brownfood.netlify.app/
    videoURL: "https://www.youtube.com/watch?v=th3U7XPuVUM",
    githubURL: "https://github.com/austinliu05/Brown-Dining",
    skills: ["React", "AWS", "Flask"],
    techStack: ["web_development/react.png", "web_development/aws.jpg", "web_development/flask.jpg",],
    diagramURL: "projects/findmyfood-architecture.png"
  },
  {
    title: "Connect 4",
    role: "Individual Contributor",
    date: "Nov. 2023 - Jan. 2024",
    description: "Connect4 game featuring a player vs. AI mode where the AI's gameplay is powered with a custom minimax algorithm and an estimateValue function. The project was developed using Python and deployed with a React/Flask tech stack. Google Firebase was used to track total Wins/Losses/Draws.",
    imageURL: "projects/connect4-minimax.webp",
    websiteURL: "https://austin-connect4.netlify.app/",
    videoURL: "",
    githubURL: "https://github.com/austinliu05/Connect4-Source-Code",
    skills: ["React", "Firebase", "Flask"],
    techStack: ["web_development/react.png", "web_development/firebase.png", "web_development/flask.jpg",]
  },
];

type ViewMode = "slideshow" | "grid";

const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <div className='title-container'>
          <h1>Projects</h1>
          <ToggleSwitch
            isOn={viewMode === 'slideshow'}
            onToggle={() =>
              setViewMode(prev => (prev === 'slideshow' ? 'grid' : 'slideshow'))
            }
          />
        </div>
      </div>
      {viewMode === "slideshow" ? (
        <Slideshow items={projectItems} />
      ) : (
        <Grid items={projectItems} />
      )}
    </section>
  );
};

export default ProjectsSection;