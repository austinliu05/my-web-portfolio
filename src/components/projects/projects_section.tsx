import React from 'react';
import Slideshow from '../slideshow'

const projectItems = [
  {
    title: "Beya",
    role: "Founding Software Engineer",
    date: "Nov. 2024 - Current",
    description: "Supporting small businesses with inventory management, event and locales proximity-based features, minimum-fee transactions, and analytics. Startup @ Brown.",
    imageURL: "projects/beya-logo.png",
    websiteURL: "https://usebeya.com/",
    videoURL: "",
    githubURL: "",
    skills: ["React Expo", "Tailwind CSS", "Firebase", "AWS", "Stripe"],
    techStack: ["web_development/react-expo.png", "web_development/tailwindcss.png","web_development/firebase.png", "web_development/aws.jpg", "web_development/stripe.jpg", ]
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
    title: "WordHunt Online",
    role: "Individual Contributor",
    date: "Oct. 2024 - Nov. 2024",
    description: "Inspired by the WordHunt game on GamePigeon, I developed a lightweight web version using React, Node.js, and Firebase. The application includes core gameplay mechanics, and I’m currently working on adding AI-driven bot difficulty levels and a real-time multiplayer system.",
    imageURL: "projects/wordhunt-online.png",
    websiteURL: "https://wordhunt-online.vercel.app/",
    videoURL: "https://youtu.be/TtuDezyLU9g",
    githubURL: "https://github.com/austinliu05/wordhunt-online",
    skills: ["React", "Bootstrap", "Firebase", "NodeJS", "Socket.IO"],
    techStack: ["web_development/react.png", "web_development/bootstrap.svg", "web_development/firebase.png", "web_development/nodejs.jpg", "web_development/socketio.png", ]
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
    techStack: ["web_development/react.png", "web_development/aws.jpg", "web_development/flask.jpg", ]
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
    techStack: ["web_development/react.png", "web_development/firebase.png", "web_development/flask.jpg", ]
  },
  {
    title: "Phantom Traffic Jam Preventation",
    role: "Researcher",
    date: "Aug. 2021 - May 2023",
    description: "Using UPenn's F1tenth Course, mastered Reactive Methods like Wall Following, Follow the Gap, and PID Controller. Implemented these techniques in a simulator, then progressed to real F1tenth vehicles. Subsequently developed the 'Phantom Traffic Jam Prevention Project' for an undergraduate research competition.",
    imageURL: "projects/unt-poster.png",
    websiteURL: "",
    videoURL: "",
    githubURL: ""
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-projects">
      <div className='container'>
        <h1>Projects</h1>
      </div>
      <Slideshow items={projectItems} />
    </section>
  );
};

export default ProjectsSection;
