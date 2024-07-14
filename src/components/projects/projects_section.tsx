import React from 'react';
import Slideshow from '../slideshow'

const projectItems = [
  {
      title: "Find My Food",
      role: "Individual Contributor",
      date: "January 2024 - May 2024",
      description: "A web application to streamline the search for preferred dining hall meals, leveraging Python web scraping on AWS Lambda for weekly menu extraction from the website. The scraped data is stored in an S3 bucket and integrated into an AWS RDS database by another Lambda function. The RDS is automatically turned off and on using cron jobs to lower costs. A Flask backend serves the data, improving user meal selection with a voting system for popular dishes. The project showcases advanced CI/CD practices, employing Jest and Pytest within GitHub Actions for automated testing and deployment.",
      imageURL: "projects/findmyfood-architecture.png",
      websiteURL:"https://brownfood.netlify.app/",
      videoURL:"https://www.youtube.com/watch?v=th3U7XPuVUM",
  },
  {
      title: "Connect 4",
      role: "Individual Contributor",
      date: "November 2023 - January 2024",
      description: "Connect4 game featuring a player vs. AI mode where the AI's gameplay is powered with a minimax algorithm and an estimateValue function. The project was develoepd using Python and deployed with Flask on the backend and React for the frontend. Used Google Firebase to track total Wins/Losses/Draws.",
      imageURL: "projects/connect4-minimax.webp",
      websiteURL:"",
      videoURL:"",
  },
  {
    title: "Phantom Traffic Jam Preventation",
    role: "Researcher",
    date: "August 2021 - May 2023",
    description: "Acquired fundamental expertise in ROS via UPenn's F1tenth Course, mastering Reactive Methods like Wall Following, Follow the Gap, and PID Controller. Initially implemented these techniques in a simulator, then progressed to real F1tenth vehicles. Subsequently developed the 'Phantom Traffic Jam Prevention Project' for an undergraduate research competition, aimed at alleviating road congestion by applying the learned concepts.",
    imageURL: "projects/unt-poster.png",
    websiteURL:"",
    videoURL:"",
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
