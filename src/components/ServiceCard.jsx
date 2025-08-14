// src/components/ServiceCard.jsx
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-dark border border-gray-800 rounded-lg p-6 hover:border-accent transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}