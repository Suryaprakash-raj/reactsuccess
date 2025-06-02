import React from "react";
import Navbar from "./Navbar";
import "./Projects.css";
import project2Img from "../assets/project2.jpg";
import backgroundVideo from "../assets/normal.mp4"; // Import your video file

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sooki Restaurant",
      description: "A frontend project userinterface...",
      technologies: ["React", "bootstrap", "javascript", "CSS", "HTML"],
      image: project2Img,
      demoLink:
        "https://github.com/Suryaprakash-raj/mywebsite/blob/main/index.html",
      codeLink: "http://suryaprakash-raj.github.io/mywebsite/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects with team collaboration.",
      technologies: ["React", "Firebase", "Material UI"],
      image: "https://via.placeholder.com/300x200?text=Task+App",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather information with forecasts and historical data visualization.",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      image: "https://via.placeholder.com/300x200?text=Weather",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Dashboard for tracking social media metrics and engagement statistics.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/300x200?text=Analytics",
    },
  ];

  return (
    <div className="projects-container">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <Navbar />
      <div className="projects-content">
        <h1 className="projects-title animate__fadeIn" id="Project1">
          My Projects
        </h1>
        <p className="projects-subtitle animate__fadeIn animate__delay-1s">
          Here are some of my recent works
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate__fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button demo"
                >
                  view code
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button code"
                >
                  live demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
