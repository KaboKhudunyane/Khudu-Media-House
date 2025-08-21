import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load all route components
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Loading component for Suspense
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
