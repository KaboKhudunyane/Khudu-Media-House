import { Link } from "react-router-dom";
import SoftEscape from "../../assets/portfolio/SoftEscape.jpg";
import LashesByThoni from "../../assets/portfolio/LashesByThoni.jpg";
import "./Portfolio.css";

const work = [
  { title: "Soft Escape", image: SoftEscape, alt: "Soft Escape visual identity and creative work" },
  { title: "Lashes by Thoni", image: LashesByThoni, alt: "Lashes by Thoni creative work" },
];

export default function PortfolioPreview() {
  return (
    <section className="work-preview" aria-labelledby="work-preview-title">
      <div className="section-heading">
        <p className="eyebrow">A glimpse of our work</p>
        <h2 id="work-preview-title">Made with intention.</h2>
      </div>
      <div className="preview-grid">
        {work.map((item) => (
          <article className="preview-card" key={item.title}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
      <Link className="text-link" to="/portfolio">Explore the portfolio <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
