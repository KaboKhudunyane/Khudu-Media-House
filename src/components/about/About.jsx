// src/components/About.jsx
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At Khudu Media House, we believe every frame tells a story. Our team of
          passionate photographers, videographers, and creative storytellers
          is dedicated to capturing moments that resonate. Whether it’s a corporate
          campaign, a personal milestone, or a large-scale production, we approach
          each project with meticulous attention to detail, cinematic vision, and
          artistic integrity.
        </motion.p>
         

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          We combine cutting-edge technology with creative expertise to produce
          visuals that are not only visually striking but emotionally compelling.
          Every project is tailored to reflect our clients’ unique identity, goals,
          and story, ensuring that the final product leaves a lasting impact.
        </motion.p>
      

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          At the heart of Khudu Media House is a commitment to excellence, innovation,
          and authenticity. We don’t just capture images or videos—we craft immersive
          experiences that connect audiences, elevate brands, and celebrate life’s
          most meaningful moments. Your story deserves nothing less than cinematic
          brilliance, and we’re here to bring it to life.
        </motion.p>
      </div>
    </section>
  );
}
