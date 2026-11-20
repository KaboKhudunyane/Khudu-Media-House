import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="navigation">
      <nav className="nav-container" aria-label="Primary navigation">
        <Link className="logo" to="/" aria-label="Khudu Media House, home">
          <span>KHUDU</span><small>MEDIA HOUSE</small>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle navigation menu</span>
          <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>
        <ul id="primary-menu" className={open ? "nav-links is-open" : "nav-links"}>
          {items.map((item) => item.href.startsWith("/#") ? (
            <li key={item.label}><Link to={item.href}>{item.label}</Link></li>
          ) : (
            <li key={item.label}><NavLink to={item.href} end={item.href === "/"} className={({ isActive }) => isActive ? "active" : undefined}>{item.label}</NavLink></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
