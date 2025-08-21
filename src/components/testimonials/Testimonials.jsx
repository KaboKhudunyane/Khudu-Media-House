// src/components/testimonials/Testimonials.jsx
import { motion } from "framer-motion";
import "./Testimonials.css";

// Sample testimonials — replace with real data
const testimonialsData = [
  {
    name: "Sibusiso M.",
    position: "CEO, MediaCorp",
    quote: "Khudu Media House transformed our campaign visuals. Truly cinematic and professional!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lerato N.",
    position: "Event Manager",
    quote: "The videography was beyond expectations. They captured every detail perfectly.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Thabo K.",
    position: "YouTube Creator",
    quote: "Creative, precise, and reliable. Our podcast visuals have never looked better!",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Zanele P.",
    position: "Wedding Planner",
    quote: "They made our clients’ wedding memories truly unforgettable. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Sibusiso M.",
    position: "CEO, MediaCorp",
    quote: "Khudu Media House transformed our campaign visuals. Truly cinematic and professional!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lerato N.",
    position: "Event Manager",
    quote: "The videography was beyond expectations. They captured every detail perfectly.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={testimonial.img} alt={testimonial.name} />
            <p className="quote">"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
