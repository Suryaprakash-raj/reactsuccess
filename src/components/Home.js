import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./Home.css";
import photo from "../assets/suryaimage.jpg";

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navigateToProjects = () => {
    navigate("/projects");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="home-page">
      {/* Animated Background Elements */}
      <div className="background-animation">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1.5, 0],
              x: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 100 - 50,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 100 - 50,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
            style={{
              position: "absolute",
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              borderRadius: "50%",
              background: `rgba(13, 110, 253, ${Math.random() * 0.1})`,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="home d-flex align-items-center" id="home">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left Text Content */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.h6
                className="text-primary mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello I'm
              </motion.h6>

              <motion.h1
                className="display-4 fw-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <strong>Surya Prakash</strong>
              </motion.h1>

              <div className="mb-4" style={{ height: "80px" }}>
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "React Specialist",
                    1000,
                    "Full Stack Engineer",
                    1000,
                    "Freelancer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "1.5rem",
                    display: "inline-block",
                    fontWeight: 600,
                    color: "#0d6efd",
                  }}
                  repeat={Infinity}
                />
              </div>

              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Passionate MERN Stack Developer building responsive and
                high-performance web applications using modern technologies.
                Focused on creating clean, efficient code and exceptional user
                experiences.
              </motion.p>

              <motion.div
                className="btn-group mt-4 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={navigateToAbout}
                >
                  About Me
                </button>
                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  onClick={navigateToProjects}
                >
                  Projects
                </button>
                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  onClick={navigateToContact}
                >
                  Contact
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="social-links mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-github fs-4 me-3"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin fs-4 me-3"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter fs-4 me-3"></i>
                </a>
                <a href="mailto:your.email@example.com">
                  <i className="bi bi-envelope fs-4"></i>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image with Floating Badges */}
            <motion.div
              className="col-lg-6 text-center"
              variants={itemVariants}
            >
              <div className="image-container position-relative">
                <motion.div
                  className="profile-image-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.img
                    src={photo}
                    alt="Surya Prakash"
                    className="img-fluid rounded-circle shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.4,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(13, 110, 253, 0.3)",
                    }}
                    style={{
                      border: "5px solid #ffffff",
                      position: "relative",
                      zIndex: 2,
                      cursor: "pointer",
                      maxWidth: "400px",
                    }}
                  />

                  {/* Experience Badge */}
                  <motion.div
                    className="experience-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span>5+ Years</span>
                    <small>Experience</small>
                  </motion.div>

                  {/* Projects Badge */}
                  <motion.div
                    className="projects-badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span>50+</span>
                    <small>Projects</small>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
