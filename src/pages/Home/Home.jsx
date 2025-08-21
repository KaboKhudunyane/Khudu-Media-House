// src/pages/Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About"; 
import Services from "../../components/Services/Services";
import Testimonials from "../../components/testimonials/Testimonials"; 
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when coming from another page with hash
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}
