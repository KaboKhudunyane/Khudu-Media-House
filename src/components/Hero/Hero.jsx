/**
 * HERO COMPONENT - HERO.JSX
 * 
 * Main hero banner section that appears at the top of the homepage.
 * Features a full-width background image with overlay, animated text elements,
 * and a call-to-action button. Uses Framer Motion for scroll-triggered animations.
 */

// src/components/Hero.jsx
import { motion } from "framer-motion";
import HeroImage from "../../assets/HeroImage.jpg"; // same as landing
import "./Hero.css";

export default function Hero() {
  return (
    /**
     * HERO SECTION
     * Full-width section with background image and dark overlay for text contrast.
     * Uses inline styles for dynamic background image loading.
     */
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${HeroImage})` }}
      role="banner"
      aria-label="Khudu Media House Hero Section"
    >
      {/* DARK OVERLAY FOR TEXT READABILITY */}
      <div className="hero-overlay">
        {/* HERO CONTENT CONTAINER */}
        <div className="hero-content">
          {/* MAIN HEADLINE WITH ANIMATION */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}      // Start hidden and 40px down
            whileInView={{ opacity: 1, y: 0 }}   // Animate to visible when in viewport
            transition={{ duration: 1 }}         // 1 second animation duration
            viewport={{ once: true }}            // Animate only once when entering viewport
          >
            Welcome to <span className="highlight">Khudu Media House</span>
          </motion.h1>

          {/* SUBTITLE WITH DELAYED ANIMATION */}
          <motion.p
            initial={{ opacity: 0 }}             // Start hidden
            whileInView={{ opacity: 1 }}         // Fade in when in viewport
            transition={{ delay: 0.3, duration: 1 }} // 0.3s delay, 1s duration
            viewport={{ once: true }}            // Animate only once
          >
            We craft cinematic photography and videography that tells your story
            with elegance and impact.
          </motion.p>

          {/* CALL-TO-ACTION BUTTON WITH ANIMATION */}
          <motion.a
            href="/contact"
            className="cta-btn"
            initial={{ opacity: 0, y: 20 }}      // Start hidden and slightly down
            whileInView={{ opacity: 1, y: 0 }}   // Fade in and move up when in viewport
            transition={{ delay: 0.6, duration: 0.8 }} // 0.6s delay, 0.8s duration
            viewport={{ once: true }}            // Animate only once
            aria-label="Contact Khudu Media House"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
