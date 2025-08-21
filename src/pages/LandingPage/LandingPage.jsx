import React, { useState, useEffect } from "react";
import SEO from '../../components/SEO';
import { motion } from "framer-motion";
import './LandingPage.css';

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;

    const handleMouseMove = (e) => {
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Khudu Media House - Premium Visual Storytelling"
        description="Crafting cinematic excellence through professional photography and videography services in South Africa."
      />
      <div className="landing-page">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Khudu Media House
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Crafting premium visual stories with cinematic excellence.
        </motion.p>

        <motion.a
          href="/home"
          aria-label="Enter Khudu Media House website"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Enter Website
        </motion.a>

        {/* Mouse Follow Glow Effect */}
        <motion.div
          className="mouse-follow"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
}
