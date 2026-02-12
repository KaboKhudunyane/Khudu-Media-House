/**
 * NAVIGATION COMPONENT - NAVIGATION.JSX
 * 
 * Responsive navigation component that handles both desktop and mobile navigation.
 * Features smooth scrolling to sections, active route highlighting, and mobile
 * menu toggle with animations using Framer Motion.
 */

// src/components/Navigation.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navigation.css";

export default function Navigation() {
  /**
   * MOBILE MENU STATE
   * Controls the visibility of the mobile dropdown menu.
   * Toggled by the hamburger menu button on mobile devices.
   */
  const [isOpen, setIsOpen] = useState(false);
  
  /**
   * CURRENT LOCATION HOOK
   * Gets the current route location to highlight active navigation items
   * and handle navigation logic based on current page.
   */
  const location = useLocation();

  /**
   * SMOOTH SCROLL TO SECTION
   * Scrolls to a specific section on the homepage with smooth animation.
   * Also closes the mobile menu after clicking a navigation item.
   * 
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', // Smooth scrolling animation
        block: 'start'      // Align to top of viewport
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  /**
   * NAVIGATION ITEMS CONFIGURATION
   * Defines all navigation items with their type, path, and behavior.
   * 
   * Types:
   * - "route": Regular React Router navigation to different pages
   * - "scroll": Smooth scrolling to sections on the homepage
   */
  const navItems = [
    { label: "Home", type: "route", path: "/home" },
    { label: "About", type: "scroll", section: "about" },
    { label: "Services", type: "scroll", section: "services" },
    { label: "Testimonials", type: "scroll", section: "testimonials" },
    { label: "Portfolio", type: "route", path: "/portfolio" },
    { label: "Contact", type: "route", path: "/contact" },
  ];

  /**
   * NAVIGATION CLICK HANDLER
   * Handles click events for all navigation items, differentiating between
   * route navigation and smooth scrolling to sections.
   * 
   * @param {Object} item - The navigation item that was clicked
   */
  const handleNavClick = (item) => {
    if (item.type === "scroll") {
      if (location.pathname !== "/home") {
        // If not on home page, navigate to home first with hash fragment
        // This ensures the target section exists before scrolling
        window.location.href = `/home#${item.section}`;
      } else {
        // Already on home page, scroll directly to the section
        scrollToSection(item.section);
      }
    } else {
      // Regular route navigation - close mobile menu
      setIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* LOGO WITH ANIMATION */}
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0, y: -20 }}  // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }}    // Fade in and move to position
          transition={{ duration: 0.6 }}    // 0.6 second animation
          aria-label="Khudu Media House Home"
        >
          Khudu Media House
        </motion.a>

        {/* DESKTOP NAVIGATION MENU */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                // ROUTE NAVIGATION LINK
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? "active" : ""}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ) : (
                // SMOOTH SCROLL BUTTON
                <button 
                  onClick={() => handleNavClick(item)}
                  className="nav-scroll-link"
                  aria-label={`Scroll to ${item.label} section`}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          ☰ {/* Hamburger icon */}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU WITH ANIMATION */}
      {isOpen && (
        <motion.ul
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}  // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }}    // Slide down and fade in
          transition={{ duration: 0.4 }}    // 0.4 second animation
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {navItems.map((item) => (
            <li key={item.label} role="none">
              {item.type === "route" ? (
                // MOBILE ROUTE LINK
                <Link 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === item.path ? "active" : ""}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ) : (
                // MOBILE SCROLL BUTTON
                <button 
                  onClick={() => handleNavClick(item)}
                  className="nav-scroll-link"
                  role="menuitem"
                  aria-label={`Scroll to ${item.label} section`}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
