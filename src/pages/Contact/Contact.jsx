/**
 * CONTACT PAGE COMPONENT - CONTACT.JSX
 * 
 * Dedicated contact page that displays the contact form component.
 * Provides a clean, focused layout for users to get in touch with
 * Khudu Media House, with navigation and footer for completeness.
 */

// src/pages/Contact.jsx
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function Contact() {  
  /**
   * CONTACT PAGE LAYOUT
   * Composes the contact page with:
   * 1. Navigation header for site-wide navigation
   * 2. ContactForm component for user inquiries
   * 3. Footer with additional contact information and links
   * 
   * This provides a complete, self-contained contact experience.
   */
  return (
    <div>
      {/* SITE NAVIGATION */}
      <Navigation />
      
      {/* MAIN CONTACT FORM COMPONENT */}
      <ContactForm/>
      
      {/* FOOTER WITH CONTACT INFO */}
      <Footer />
    </div>
  );
}
