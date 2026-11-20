import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading" style={{ "--hero-image": `url(${HeroImage})` }}>
      <div className="hero-inner">
        <p className="hero-eyebrow">Photography · Film · Creative Media</p>
        <h1 id="hero-heading">Stories deserve to be seen beautifully.</h1>
        <p class="hero-lede">Khudu Media House creates thoughtful photography and film that preserve the atmosphere, people and detail behind every occasion.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/contact">Start a project</Link>
          <Link className="button button-secondary" to="/portfolio">View selected work</Link>
        </div>
      </div>
    </section>
  );
}
