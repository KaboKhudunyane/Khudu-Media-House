/**
 * MAIN APPLICATION COMPONENT - APP.JSX
 * 
 * This is the root component of the Khudu Media House React application.
 * It handles routing, lazy loading of components, and provides the overall
 * application structure with React Router and Suspense for code splitting.
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

/**
 * LAZY LOADING IMPORTS
 * Using React's lazy() function to dynamically import components only when needed.
 * This improves initial load performance by splitting the code into chunks.
 */
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

/**
 * LOADING SPINNER COMPONENT
 * Fallback UI shown while lazy-loaded components are being fetched.
 * Uses Tailwind CSS for styling with a spinning animation.
 */
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

/**
 * MAIN APP COMPONENT
 * Sets up the React Router with routes and handles navigation.
 * Uses Suspense to handle loading states for lazy-loaded components.
 */
export default function App() {
  return (
    <Router>
      {/* 
        SUSPENSE FOR LAZY LOADING
        Wraps all routes to show loading spinner while components load.
        This provides a better user experience during code splitting.
      */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Landing Page Route - Entry point of the application */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Home Page Route - Main website with multiple sections */}
          <Route path="/home" element={<Home />} />
          
          {/* Portfolio Page Route - Showcase of work */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Contact Page Route - Contact form and information */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 
            CATCH-ALL ROUTE
            Redirects any unknown routes to the landing page.
            Uses Navigate component with replace to maintain clean browser history.
          */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
