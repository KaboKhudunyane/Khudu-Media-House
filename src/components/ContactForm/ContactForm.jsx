// src/components/ContactForm/ContactForm.jsx
import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        Have questions or want to work together? Send us a message and we’ll get back to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
