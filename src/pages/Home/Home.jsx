import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/about/About";
import Services from "../../components/Services/Services";
import PortfolioPreview from "../../components/Portfolio/PortfolioPreview";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <SEO title="Khudu Media House | Photography & Visual Storytelling" description="Photography, videography, event coverage and creative media production by Khudu Media House." />
      <Navigation />
      <main id="main-content">
        <Hero />
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <PortfolioPreview />
      </main>
      <Footer />
    </>
  );
}
