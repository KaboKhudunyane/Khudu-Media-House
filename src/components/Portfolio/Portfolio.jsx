import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

// Example projects (replace with your own images + text)
import Project1 from "../../assets/portfolio/SoftEscape.jpg";
import Project2 from "../../assets/portfolio/SoftEscape.jpg";
import Project3 from "../../assets/portfolio/SoftEscape.jpg";
import Project4 from "../../assets/portfolio/SoftEscape.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Event Coverage",
      description: "Full media coverage for a high-profile corporate summit with photography, videography, and highlight reels.",
      img: Project1,
    },
    {
      title: "Wedding Story",
      description: "A cinematic wedding project, capturing the most intimate and joyful moments of the day.",
      img: Project2,
    },
    {
      title: "YouTube & Podcast Studio",
      description: "Produced a full creative setup and branding visuals for a successful podcast channel.",
      img: Project3,
    },
    {
      title: "Aerial Drone Shots",
      description: "Stunning aerial footage and photography showcasing landscapes and architectural beauty.",
      img: Project4,
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleClose = () => setSelected(null);
  const handleNext = () =>
    setSelected((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setSelected((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="portfolio-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Portfolio
      </motion.h2>

      {/* Grid of projects */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(index)}
          >
            <img src={project.img} alt={project.title} />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-content">
              <button className="close-btn" onClick={handleClose}>
                ✖
              </button>
              <button className="nav-btn left" onClick={handlePrev}>
                &#10094;
              </button>
              <img
                src={projects[selected].img}
                alt={projects[selected].title}
              />
              <button className="nav-btn right" onClick={handleNext}>
                &#10095;
              </button>
              <div className="lightbox-text">
                <h3>{projects[selected].title}</h3>
                <p>{projects[selected].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
