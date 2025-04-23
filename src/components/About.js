import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";

function About() {
  const skills = [
    { name: "React", level: 60 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "HTML/CSS", level: 95 },
  ];

  const experiences = [
    {
      role: " MERN Stack",
      duration: "3 Month",
      company: "Appin technology Lab coimbatore",
      period: "February - April - 2025",

      description: [
        "Completed an intensive internship in MERN (MongoDB, Express.js, React, Node.js) stack development, gaining hands-on experience in building full-stack web applications. Worked on real-world projects involving RESTful APIs, database design, frontend development with React, and backend integration with Node.js & Express. Collaborated with a team to develop scalable and responsive web solutions while following industry best practices. Enhanced skills in JavaScript, state management, authentication, and deployment.",
      ],
    },
  ];

  const education = [
    {
      degree: "Becholor of Engineering | Computer Science And Engineering",
      institution: "Anna University",
      year: "2022-2025",
      achievements: ["Graduated with Honors (GPA: 7.6)"],
    },
    {
      degree: "Diploma | Computer Science",
      institution: "Kongu Vellalar Polytechnic College, Erode,Seenapuram",
      duration: "2019 - 2022",
      percentage: "90.3%",
      achievements: [
        "Secured **90.3%** with distinction",
        "Active participant in technical symposiums",
       
        "Member of the coding club",
      ],
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "City College",
      year: "2015",
      achievements: [
        "Minor in User Experience Design",
        "President of Developers Club",
        "Won hackathon for best educational app",
      ],
    },
  ];

  return (
    <div className="about-page">
      <Navbar />

      <section className="about-section py-5">
        <div className="container">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h2 className="display-4 fw-bold" id="about">About Me</h2>
            <p className="lead text-muted">
              Get to know more about my skills and experience
            </p>
          </motion.div>

          <div className="row">
            {/* Left Column - About and Skills */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* About Me Card */}
              <div className="about-card p-4 shadow-sm rounded mb-4">
  <h3 className="mb-4">Who I Am</h3>
  <p>
    I'm a passionate <strong>MERN stack developer</strong> with strong foundational skills in 
    <strong> MongoDB, Express.js, React, and Node.js</strong>. Eager to launch my career 
    by contributing to innovative projects while growing as a professional developer.
  </p>
  <p>
    Through my academic projects and internship at <strong>Appin Technology Lab</strong>, 
    I've built full-stack applications with <strong>REST APIs, JWT authentication, 
    and responsive UIs</strong>. I specialize in writing clean, maintainable code 
    following best practices.
  </p>
  <p>
    My key technical skills include:
    <ul className="mt-2 pl-4">
      <li><strong>Frontend:</strong> React.js, Redux, HTML5, CSS3, Bootstrap</li>
      <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
      <li><strong>Tools:</strong> Git, Postman, VS Code, npm/yarn</li>
    </ul>
  </p>
  <p>
    I'm actively seeking opportunities where I can apply my skills, 
    learn from experienced teams, and deliver value through quality development.
  </p>
</div>
              {/* Skills Section */}
              <div className="skills-card p-4 shadow-sm rounded">
                <h3 className="mb-4">Technical Skills</h3>
                <div className="row">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="col-md-6 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-item">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: "8px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Experience and Education */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Experience Section */}
              <div className="experience-card p-4 shadow-sm rounded mb-4">
                <h3 className="mb-4">Internship</h3>
                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="timeline-badge bg-primary"></div>
                      <div className="timeline-content p-3">
                        <h5 className="fw-bold">{exp.role}</h5>
                        <h6 className="text-primary mb-3">
                          {exp.company} | {exp.period}
                        </h6>
                        <ul className="list-unstyled">
                          {exp.description.map((item, i) => (
                            <li key={i} className="mb-2 d-flex">
                              <span className="me-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="education-card p-4 shadow-sm rounded">
                <h3 className="mb-4">Education</h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h5 className="fw-bold">{edu.degree}</h5>
                    <h6 className="text-primary mb-2">
                      {edu.institution} | {edu.year}
                    </h6>
                    <ul className="list-unstyled">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
