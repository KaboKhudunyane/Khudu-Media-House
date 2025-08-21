// src/components/services/Services.jsx
import "./Services.css";

// Replace these with your actual images
import ImgPhotography from "../../assets/services/Photography.jpg";
import ImgVideography from "../../assets/services/Videography.jpg"; 
import ImgEvents from "../../assets/services/Events.jpg";
import ImgWeddings from "../../assets/services/Wedding.jpg";
import ImgPodcast from "../../assets/services/podcast.jpg"; 
import ImgDrones from "../../assets/services/Drones.jpg";

export default function Services() {
  const services = [
    { title: "Photography", description: "Capturing moments with precision, creativity, and cinematic quality.", img: ImgPhotography },
    { title: "Videography", description: "High-quality video production that tells your story.", img: ImgVideography },
    { title: "Events", description: "Full event coverage capturing every detail and emotion.", img: ImgEvents },
    { title: "Weddings", description: "Documenting the most special day of your life with cinematic photography and videography.", img: ImgWeddings },
    { title: "Graduation & Matric Dance", description: "Documenting the most special day of your life with cinematic photography and videography.", img: ImgWeddings },
    { title: "YouTube & Podcasts", description: "Content creation for online platforms, including YouTube and podcast visual branding.", img: ImgPodcast },
    { title: "Metric Drones", description: "Drone photography and videography for breathtaking aerial shots.", img: ImgDrones },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-slider">
        <div className="services-track">
          {duplicatedServices.map((service, i) => (
            <div className="service-card" key={i}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
