/**
 * SERVICES COMPONENT - SERVICES.JSX
 * 
 * Showcase component that displays Khudu Media House's services in an
 * infinite horizontal scrolling carousel. Features service cards with
 * images, titles, and descriptions for each offered service.
 */

// src/components/services/Services.jsx
import "./Services.css";

// Service image imports - replace with actual project images
import ImgPhotography from "../../assets/services/Photography.jpg";
import ImgVideography from "../../assets/services/Videography.jpg"; 
import ImgEvents from "../../assets/services/Events.jpg";
import ImgWeddings from "../../assets/services/Wedding.jpg";
import ImgPodcast from "../../assets/services/podcast.jpg"; 
import ImgDrones from "../../assets/services/Drones.jpg";

export default function Services() {
  /**
   * SERVICES DATA ARRAY
   * Contains all services offered by Khudu Media House with:
   * - title: Service name
   * - description: Brief service description
   * - img: Imported image for visual representation
   * 
   * Note: Some services currently use placeholder images that need replacement.
   */
  const services = [
    { title: "Photography", description: "Capturing moments with precision, creativity, and cinematic quality.", img: ImgPhotography },
    { title: "Videography", description: "High-quality video production that tells your story.", img: ImgVideography },
    { title: "Events", description: "Full event coverage capturing every detail and emotion.", img: ImgEvents },
    { title: "Weddings", description: "Documenting the most special day of your life with cinematic photography and videography.", img: ImgWeddings },
    { title: "Graduation & Matric Dance", description: "Documenting the most special day of your life with cinematic photography and videography.", img: ImgWeddings },
    { title: "YouTube & Podcasts", description: "Content creation for online platforms, including YouTube and podcast visual branding.", img: ImgPodcast },
    { title: "Metric Drones", description: "Drone photography and videography for breathtaking aerial shots.", img: ImgDrones },
  ];

  /**
   * DUPLICATED SERVICES ARRAY
   * Creates a duplicated array of services to enable seamless infinite scrolling.
   * The CSS animation creates a continuous loop by animating through both copies.
   */
  const duplicatedServices = [...services, ...services];

  return (
    <section className="services-section">
      {/* SECTION HEADING */}
      <h2>Our Services</h2>
      
      {/* INFINITE SCROLLING CONTAINER */}
      <div className="services-slider">
        {/* SERVICES TRACK FOR ANIMATION */}
        <div className="services-track">
          {/* RENDER DUPLICATED SERVICE CARDS */}
          {duplicatedServices.map((service, i) => (
            <div className="service-card" key={i}>
              {/* SERVICE IMAGE */}
              <img 
                src={service.img} 
                alt={service.title} 
                loading="lazy" // Lazy load images for performance
              />
              
              {/* SERVICE TITLE */}
              <h3>{service.title}</h3>
              
              {/* SERVICE DESCRIPTION */}
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
