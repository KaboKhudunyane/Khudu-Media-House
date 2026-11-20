import "./Services.css";
import ImgPhotography from "../../assets/services/Photography.jpg";
import ImgVideography from "../../assets/services/Videography.jpg";
import ImgEvents from "../../assets/services/Events.jpg";
import ImgWeddings from "../../assets/services/Wedding.jpg";
import ImgPodcast from "../../assets/services/Podcast.jpg";
import ImgDrones from "../../assets/services/Drones.jpg";

const services = [
  { title: "Photography", description: "Creative photography for people, milestones, brands and places.", image: ImgPhotography },
  { title: "Videography", description: "Moving images shaped to capture the feeling and story of a moment.", image: ImgVideography },
  { title: "Event coverage", description: "Photo and video coverage for events, from key moments to the details in between.", image: ImgEvents },
  { title: "Weddings & celebrations", description: "Thoughtful visual documentation of meaningful days and celebrations.", image: ImgWeddings },
  { title: "Podcast & online content", description: "Visual production for podcasts and digital content.", image: ImgPodcast },
  { title: "Aerial media", description: "Drone photography and video for distinctive aerial perspectives.", image: ImgDrones },
];

export default function Services() {
  return (
    <div className="services-section">
      <div className="section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Visuals for the moments that matter.</h2>
        <p>From a single portrait to a full event story, we bring care and creativity to every frame.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt="" loading="lazy" />
            <div className="service-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
