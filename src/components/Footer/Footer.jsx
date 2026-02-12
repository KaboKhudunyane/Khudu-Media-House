// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ============================= */}
      {/* Social Links Section */}
      {/* ============================= */}
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/khudu.media.house" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/karabo-khudunyane-5374971aa/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
          <FaTiktok />
        </a>
        <a href="https://wa.me/+27797403500" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      {/* ============================= */}
      {/* Glowing Divider */}
      {/* ============================= */}
      <div className="glow-divider"></div>

      {/* ============================= */}
      {/* Powered By Section */}
      {/* ============================= */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khudu Media House. Powered by Khetlho Technologies Pty Ltd.</p>
      </div>
    </footer>
  );
}
