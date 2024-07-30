import React from 'react';
import Slideshow from '../slideshow'

const projectItems = [
    {
      title: "Guitar Tab Transformer",
      role: "Individual Contributor",
      date: "June 2024 - Current",
      description: "As an avid guitarist, I've decided to take on the challenge of designing a custom neural network to automatically transpose any song into guitar tabs from the audio file. I am currently focusing on creating a Convolutional Neural Network (CNN) to transpose standard music sheets into guitar tabs first.",
      imageURL: "projects/work-in-progress.jpg",
      websiteURL:"https://www.kaggle.com/code/apoxieforest/gtt-guitar-tab-transformer",
      videoURL:"",
      githubURL: ""
  },
  {
      title: "Find My Food",
      role: "Individual Contributor",
      date: "January 2024 - May 2024",
      description: "A web application that streamlines the search for dining hall meals. The web scraping functionality leverages AWS Lambda, and uploads information to a AWS RDS instance, which is has been optimized with a cron job to lower monthly costs. The project employs Jest and Pytest within GitHub Actions for automated testing and deployment.",
      imageURL: "projects/findmyfood-architecture.png",
      websiteURL:"https://brownfood.netlify.app/",
      videoURL:"https://www.youtube.com/watch?v=th3U7XPuVUM",
      githubURL: "https://github.com/austinliu05/Brown-Dining"
  },
  {
      title: "Connect 4",
      role: "Individual Contributor",
      date: "November 2023 - January 2024",
      description: "Connect4 game featuring a player vs. AI mode where the AI's gameplay is powered with a custom minimax algorithm and an estimateValue function. The project was developed using Python and deployed with a React/Flask tech stack. Google Firebase was used to track total Wins/Losses/Draws.",
      imageURL: "projects/connect4-minimax.webp",
      websiteURL:"https://austin-connect4.netlify.app/",
      videoURL:"",
      githubURL: "https://github.com/austinliu05/Connect4-Source-Code"
  },
  {
    title: "Phantom Traffic Jam Preventation",
    role: "Researcher",
    date: "August 2021 - May 2023",
    description: "Acquired fundamental expertise in ROS via UPenn's F1tenth Course, mastering Reactive Methods like Wall Following, Follow the Gap, and PID Controller. Initially implemented these techniques in a simulator, then progressed to real F1tenth vehicles. Subsequently developed the 'Phantom Traffic Jam Prevention Project' for an undergraduate research competition, aimed at alleviating road congestion by applying the learned concepts.",
    imageURL: "projects/unt-poster.png",
    websiteURL:"",
    videoURL:"",
    githubURL: ""
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
