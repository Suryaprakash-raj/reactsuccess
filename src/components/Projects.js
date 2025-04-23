import React from "react";
import Navbar from "./Navbar";
import "./Projects.css"; // Custom styles for animations

function Project() {
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div className="project-header text-white text-center py-5 fade-in-top">
        <h1 className="display-4 fw-bold" id="Projects">My Projects</h1>
        <p className="lead">Here are some things I've built recently</p>
      </div>

      {/* Project Cards Section */}
      <div className="container my-5 fade-in">
        <div className="row g-4">
          {/* Project Card 1 */}
          <div className="col-md-4 slide-in-left">
            <div className="card h-100 shadow project-card">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">
                  A personal portfolio built with React.js, showcasing my skills
                  and work.
                </p>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="col-md-4 slide-in-up">
            <div className="card h-100 shadow project-card">
              <img
                src="https://via.placeholder.com/350x200"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">resuturent Project</h5>
                <p className="card-text">
                  A simple to-do list app with CRUD operations using React and
                  local storage.
                </p>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
         
        </div>
      </div>
    </div>
  );
}

export default Project;
