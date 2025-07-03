import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";
import backgroundVideo from "../assets/normal.mp4"; // Import your video file

// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const techIcons = [
    { icon: "⚛️", name: "React" },
    { icon: "🟨", name: "JavaScript" },
    { icon: "🟩", name: "Node.js" },
    { icon: "🟦", name: "CSS" },
    { icon: "🟧", name: "HTML" },
    { icon: "🟪", name: "MongoDB" },
    { icon: "⬛", name: "Express" },
    { icon: "🟫", name: "Git" },
  ];

  return (
    <div className="floating-tech-icons">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-icon"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          whileHover={{
            scale: 1.5,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          {tech.icon}
          <span className="tech-tooltip">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

function About() {
  const skills = [
    { name: "React", level: 85, icon: "⚛️", color: "red" },
    { name: "Node.js", level: 80, icon: "🟩", color: "#68A063" },
    { name: "MongoDB", level: 75, icon: "🟪", color: "#4DB33D" },
    { name: "Express", level: 70, icon: "⬛", color: "#000000" },
    { name: "JavaScript", level: 85, icon: "🟨", color: "#F7DF1E" },
    { name: "HTML", level: 90, icon: "🟧", color: "#E44D26" },
    { name: "Git/GitHub", level: 80, icon: "🔀", color: "#F05032" },
    { name: "CSS", level: 80, icon: "🔗", color: "#00A0DC" },
    { name: "Bootstrap", level: 85, icon: "🎀", color: "#7952B3" },
  ];

  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      duration: "3 Months",
      company: "Appin Technology Lab, Coimbatore",
      period: "February - April 2025",
      description: [
        "Developed 3 full-stack web apps using React, Node.js, Express, and MongoDB",
        "Implemented secure JWT-based authentication and role-based access",
        "Built and documented RESTful APIs using Swagger",
        "Optimized React performance with memoization and code splitting",
        "Collaborated in a 5-member agile team with Git version control",
        "Improved API response time by 40% via query optimization",
      ],
      projects: [
        {
          name: "E-commerce Dashboard",
          description:
            "Admin panel with product management, order tracking, and analytics",
        },
        {
          name: "Task Management System",
          description:
            "Collaborative tool with real-time updates using Socket.io",
        },
      ],
    },
    {
      role: "Freelance Web Developer",
      duration: "1 Year",
      company: "Self-Employed",
      period: "2023 - 2024",
      description: [
        "Built responsive websites for small businesses and startups",
        "Created custom WordPress themes and plugins",
        "Improved website performance through image optimization and lazy loading",
        "Implemented SEO best practices resulting in 30% traffic increase for clients",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering | Computer Science",
      institution: "Anna University",
      year: "2022-2025",
      achievements: [
        "Graduated with Honors (GPA: 7.6)",
        "Coursework: Data Structures, Algorithms, DBMS, Web Technologies, Cloud Computing",
        "Final Year Project: E-commerce platform with MERN stack featuring payment integration",
        "Participated in 5+ hackathons and coding competitions",
        "Active member of the Computer Science Student Association",
      ],
    },
    {
      degree: "Diploma | Computer Science",
      institution: "Kongu Vellalar Polytechnic College, Erode",
      year: "2019 - 2022",
      achievements: [
        "Secured 90.3% with distinction (Top 5% of class)",
        "Developed 8+ mini-projects including library management system, weather app, and quiz application",
        "Won 1st prize in college-level web development competition",
        "Organized technical workshops as coding club coordinator",
      ],
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "Government High School",
      year: "2018-2019",
      achievements: [
        "Scored 63.3% in SSLC board exams",
        "Active participant in extracurricular activities including drawing and science exhibitions",
        "Member of school computer club",
        "Best memory: Leading team to win inter-school science project competition",
      ],
    },
  ];

  const certifications = [
    {
      name: "MERN Stack Certification",
      issuer: "Appin Technology Lab",
      year: "2025",
    },
    {
      name: "Robotic Process Automation",
      issuer: "ICT Academy",
      year: "2024",
    },
    {
      name: "Work Programme: Communication, Adaptability, Critical Thinking, Collaboration",
      issuer: "Magic-bus",
      year: "2025",
    },
    {
      name: "MERN Stack Course Enrollment",
      issuer: "Appin Technology Lab",
      year: "2025",
    },
  ];

  const hobbies = [
    "Open source contribution",
    "Competitive programming",
    "Building side projects",
    "Exploring new cultures and meeting new people",
  ];

  return (
    <div className="about-page">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <Navbar />

      {/* Background Elements */}
      <FloatingTechIcons />
      <div className="animated-grid"></div>

      <motion.section
        className="about-section py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            className="text-center mb-5"
          >
            <motion.h2
              className="display-4 fw-bold"
              id="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About Me
              <motion.span
                className="title-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Full Stack Developer | Open Source Enthusiast | Tech Explorer
            </motion.p>
          </motion.div>

          <div className="row">
            {/* Left Column - About and Skills */}
            <motion.div
              className="col-lg-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    when: "beforeChildren",
                  },
                },
              }}
            >
              {/* About Me Card */}
              <motion.div
                className="about-card p-4 shadow-sm rounded mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="mb-4">
                  <motion.span
                    className="border-bottom border-primary pb-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Who I Am
                  </motion.span>
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  I'm a passionate <strong>Full Stack Developer</strong>{" "}
                  specializing in the MERN stack with 2 years of hands-on
                  experience building web applications. My journey in tech began
                  when I built my first website at 16, and I've been hooked ever
                  since.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  What excites me most about development is solving real-world
                  problems through clean, efficient code. I thrive in
                  collaborative environments where I can both contribute my
                  skills and learn from experienced developers.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p>When I'm not coding, you can find me:</p>
                  <ul className="mt-2 pl-4">
                    {hobbies.map((hobby, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {hobby}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                className="skills-card p-4 shadow-sm rounded mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="mb-4">Technical Skills</h3>
                <div className="row">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      className="col-md-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.4 }}
    >
      <motion.div
        className="skill-item"
        whileHover={{
          scale: 1.05,
          boxShadow: `0 0 15px ${skill.color}`,
        }}
      >
        <div className="d-flex align-items-center mb-2">
          <span className="tech-icon me-2">{skill.icon}</span>
          <span className="fw-medium">{skill.name}</span>
          {/* Apply styles to the percentage text */}
          <span
            className="ms-auto"
            style={{
              color: '#fff', // Ensure white text
              textShadow: '0 0 5px rgba(0, 0, 0, 0.8)', // Add shadow for contrast
              fontWeight: 'bold',
            }}
          >
            {skill.level}%
          </span>
        </div>
        <motion.div
          className="progress"
          style={{
            height: "10px",
            backgroundColor: `${skill.color}20`,
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          <motion.div
            className="progress-bar"
            style={{
              width: `${skill.level}%`,
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: index * 0.1 + 0.8,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scaleY: 1.5,
              originY: 1,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  ))}
</div>

              </motion.div>

              {/* Certifications Section */}
              <motion.div
                className="certifications-card p-4 shadow-sm rounded"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="mb-4">Certifications</h3>
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="certification-item p-3 mb-3 rounded"
                      initial={{
                        opacity: 0,
                        x: -50,
                        rotateY: 90,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        scale: 1,
                      }}
                      transition={{
                        delay: 0.5 + index * 0.15,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      whileHover={{
                        rotateZ: [0, -2, 2, -2, 2, 0],
                        y: -5,
                        boxShadow: "0 10px 20px rgba(13, 110, 253, 0.2)",
                        transition: {
                          rotateZ: {
                            duration: 0.8,
                            repeat: 1,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          },
                          y: { duration: 0.3 },
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="certification-content"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start">
                          <motion.div
                            whileHover={{
                              scale: 1.01,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <motion.h5
                              className="mb-1 fw-bold"
                              whileHover={{ color: "#0d6efd" }}
                            >
                              {cert.name.split(",").map((item, i) => (
                                <React.Fragment key={i}>
                                  {i > 0 && ", "}
                                  {item.trim().charAt(0).toUpperCase() +
                                    item.trim().slice(1)}
                                </React.Fragment>
                              ))}
                            </motion.h5>
                            <motion.p
                              className="text-muted mb-0"
                              whileHover={{ x: 3 }}
                            >
                              {cert.issuer.trim()}
                            </motion.p>
                          </motion.div>
                          <motion.span
                            className="badge bg-primary rounded-pill"
                            initial={{ rotate: 45, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.15 }}
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.5 },
                            }}
                          >
                            {cert.year}
                          </motion.span>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Experience and Education */}
            <motion.div
              className="col-lg-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    when: "beforeChildren",
                  },
                },
              }}
            >
              {/* Experience Section */}
              <motion.div
                className="experience-card p-4 shadow-sm rounded mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="mb-4">Professional Experience</h3>
                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.2 }}
                    >
                      <div className="timeline-badge"></div>
                      <div className="timeline-content p-3">
                        <motion.h5
                          className="fw-bold"
                          whileHover={{ color: "#0d6efd" }}
                        >
                          {exp.role}
                        </motion.h5>
                        <motion.h6
                          className="text-primary mb-3"
                          whileHover={{ scale: 1.02 }}
                        >
                          {exp.company} | {exp.period}
                        </motion.h6>
                        <ul className="list-unstyled">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              className="mb-2 d-flex"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="me-2 text-primary">•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {exp.projects && (
                          <>
                            <motion.h6
                              className="mt-3 mb-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              Key Projects:
                            </motion.h6>
                            <ul className="list-unstyled">
                              {exp.projects.map((project, i) => (
                                <motion.li
                                  key={i}
                                  className="mb-2 ps-3 border-start border-primary"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.6 + i * 0.1 }}
                                >
                                  <strong>{project.name}:</strong>{" "}
                                  {project.description}
                                </motion.li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education Section */}
              <motion.div
                className="education-card p-4 shadow-sm rounded"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="mb-4">Education</h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.h5
                      className="fw-bold"
                      whileHover={{ color: "#0d6efd" }}
                    >
                      {edu.degree}
                    </motion.h5>
                    <motion.h6
                      className="text-primary mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {edu.institution} | {edu.year || edu.duration}
                    </motion.h6>
                    <ul className="list-unstyled">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="mb-2 d-flex"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="me-2 text-primary">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
