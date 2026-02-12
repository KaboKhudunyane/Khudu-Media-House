/**
 * HOME PAGE COMPONENT - HOME.JSX
 * 
 * Main homepage that serves as the central hub of the Khudu Media House website.
 * Composes multiple sections (Hero, About, Services, Testimonials) and handles
 * smooth scrolling to sections when navigating with hash URLs.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About"; 
import Services from "../../components/Services/Services";
import Testimonials from "../../components/testimonials/Testimonials"; 
import Footer from "../../components/Footer/Footer";

export default function Home() {
  /**
   * ROUTER LOCATION HOOK
   * Gets the current location object from React Router, which includes
   * pathname, search parameters, and hash fragment for section navigation.
   */
  const location = useLocation();

  /**
   * SMOOTH SCROLLING EFFECT
   * Handles automatic scrolling to specific sections when the page loads
   * with a hash URL (e.g., /home#services). This enables deep linking
   * to specific sections of the homepage.
   */
  useEffect(() => {
    // Check if URL contains a hash fragment for section navigation
    if (location.hash) {
      // Extract section ID from hash (remove the '#' character)
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Add a small delay to ensure the page and components are fully loaded
        // This prevents scrolling before the target section is rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', // Smooth scrolling animation
            block: 'start'      // Align to top of viewport
          });
        }, 100); // 100ms delay for reliable scrolling
      }
    }
  }, [location]); // Re-run effect when location changes

  /**
   * HOMEPAGE LAYOUT
   * Composes the complete homepage with all sections in order:
   * 1. Navigation - Fixed header with navigation links
   * 2. Hero - Main banner with call-to-action
   * 3. About - Company information and mission
   * 4. Services - Showcase of offered services
   * 5. Testimonials - Client reviews and testimonials
   * 6. Footer - Contact information and links
   * 
   * Each section has an ID for direct navigation via hash URLs.
   */
  return (
    <div>
      {/* FIXED NAVIGATION HEADER */}
      <Navigation />
      
      {/* HERO BANNER SECTION - First visual element */}
      <Hero />
      
      {/* ABOUT SECTION - Company information */}
      <section id="about">
        <About />
      </section>
      
      {/* SERVICES SECTION - Service offerings showcase */}
      <section id="services">
        <Services />
      </section>
      
      {/* TESTIMONIALS SECTION - Client reviews */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* FOOTER SECTION - Contact and links */}
      <Footer />
    </div>
  );
}
