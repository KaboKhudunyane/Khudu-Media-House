// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-dark h-screen flex items-center justify-center text-light">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-4">
          Capturing <span className="text-accent">Moments</span>
        </h1>
        <p className="text-xl mb-8">Professional Photography & Videography</p>
        <button className="bg-accent text-dark px-6 py-3 rounded hover:bg-opacity-90 transition">
          View Portfolio
        </button>
      </div>
    </section>
  );
}