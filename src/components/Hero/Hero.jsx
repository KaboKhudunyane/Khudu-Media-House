// src/components/Hero.jsx
import { motion } from "framer-motion";
import HeroImage from "../../assets/HeroImage.jpg"; // same as landing
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="highlight">Khudu Media House</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We craft cinematic photography and videography that tells your story
            with elegance and impact.
          </motion.p>

          <motion.a
            href="/contact"
            className="cta-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
