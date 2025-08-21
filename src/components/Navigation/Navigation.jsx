// src/components/Navigation.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Navigation items configuration
  const navItems = [
    { label: "Home", type: "route", path: "/home" },
    { label: "About", type: "scroll", section: "about" },
    { label: "Services", type: "scroll", section: "services" },
    { label: "Testimonials", type: "scroll", section: "testimonials" },
    { label: "Portfolio", type: "route", path: "/portfolio" },
    { label: "Contact", type: "route", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "scroll") {
      if (location.pathname !== "/home") {
        // If not on home page, navigate to home first then scroll
        window.location.href = `/home#${item.section}`;
      } else {
        // Already on home page, just scroll
        scrollToSection(item.section);
      }
    } else {
      // Route navigation
      setIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Khudu Media House
        </motion.a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  onClick={() => handleNavClick(item)}
                  className="nav-scroll-link"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                <Link 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  onClick={() => handleNavClick(item)}
                  className="nav-scroll-link"
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
