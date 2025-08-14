// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-light p-8 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <div className="font-serif text-2xl mb-2">
          <div className="flex flex-col leading-none">
            <span>MEDIA</span>
            <span>HOUSE</span>
            <span className="text-accent text-xs mt-1">ESTD 2024</span>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Khudu Media House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}