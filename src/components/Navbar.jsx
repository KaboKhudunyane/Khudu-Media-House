// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-dark text-light p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (matches your PNG) */}
        <Link to="/" className="font-serif text-2xl tracking-tight">
          <div className="flex flex-col leading-none">
            <span>KHUDU</span>
            <span>MEDIA</span>
            <span>HOUSE</span>
            <span className="text-accent text-xs mt-1">EST 2024</span>
          </div>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/services" className="hover:text-accent transition">Services</Link>
          <Link to="/portfolio" className="hover:text-accent transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>

        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
}