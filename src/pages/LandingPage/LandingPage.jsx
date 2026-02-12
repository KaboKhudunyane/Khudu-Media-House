/**
 * LANDING PAGE COMPONENT - LANDINGPAGE.JSX
 * 
 * This is the entry point/landing page of the Khudu Media House website.
 * Features a minimalist design with smooth animations and an interactive
 * mouse-follow glow effect to create an engaging first impression.
 */

import React, { useState, useEffect } from "react";
import SEO from '../../components/SEO';
import { motion } from "framer-motion";
import './LandingPage.css';

export default function LandingPage() {
  /**
   * MOUSE POSITION STATE
   * Tracks the current mouse coordinates for the interactive glow effect.
   * Uses { x, y } object to store position relative to viewport.
   */
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /**
   * MOUSE MOVEMENT EFFECT
   * Sets up event listener to track mouse movement and update position state.
   * Uses requestAnimationFrame for smooth performance and proper cleanup.
   */
  useEffect(() => {
    let frameId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smooth 60fps updates
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup function to remove event listener and cancel animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* SEO COMPONENT */}
      <SEO 
        title="Khudu Media House - Premium Visual Storytelling"
        description="Crafting cinematic excellence through professional photography and videography services in South Africa."
      />
      
      {/* MAIN LANDING PAGE CONTENT */}
      <div className="landing-page">
        {/* MAIN HEADLINE WITH ANIMATION */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}  // Start hidden and 40px down
          animate={{ opacity: 1, y: 0 }}   // Animate to visible and original position
          transition={{ duration: 1 }}     // 1 second animation duration
        >
          Khudu Media House
        </motion.h1>

        {/* SUBTITLE WITH DELAYED ANIMATION */}
        <motion.p
          initial={{ opacity: 0 }}         // Start hidden
          animate={{ opacity: 1 }}         // Fade in to visible
          transition={{ delay: 0.5, duration: 1 }} // 0.5s delay, 1s duration
        >
          Crafting premium visual stories with cinematic excellence.
        </motion.p>

        {/* CALL-TO-ACTION BUTTON WITH ANIMATION */}
        <motion.a
          href="/home"
          aria-label="Enter Khudu Media House website" // Accessibility label
          initial={{ opacity: 0, y: 20 }}  // Start hidden and slightly down
          animate={{ opacity: 1, y: 0 }}   // Fade in and move to position
          transition={{ delay: 1, duration: 0.8 }} // 1s delay, 0.8s duration
        >
          Enter Website
        </motion.a>

        {/* INTERACTIVE MOUSE FOLLOW GLOW EFFECT */}
        <motion.div
          className="mouse-follow"
          style={{
            // Position the glow effect centered on mouse cursor
            left: mousePosition.x - 192, // Center horizontally (384px / 2)
            top: mousePosition.y - 192,  // Center vertically (384px / 2)
          }}
          animate={{
            // Pulsing scale animation for dynamic effect
            scale: [1, 1.05, 1], // Scale from 1 to 1.05 and back
          }}
          transition={{
            duration: 20,        // Very slow animation (20 seconds)
            repeat: Infinity,    // Infinite loop
            ease: "easeInOut"    // Smooth easing function
          }}
        />
      </div>
    </>
  );
}
