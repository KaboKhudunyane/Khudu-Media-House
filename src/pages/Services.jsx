// src/pages/Services.jsx
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Wedding Photography",
    description: "Elegant and timeless coverage for your special day.",
    icon: "📸",
  },
  {
    title: "Event Videography",
    description: "Cinematic storytelling for corporate or personal events.",
    icon: "🎥",
  },
];

export default function Services() {
  return (
    <div className="bg-dark text-light min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}