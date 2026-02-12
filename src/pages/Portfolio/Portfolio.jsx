import Navigation from "../../components/Navigation/Navigation";
import PortfolioComponent from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";

/**
 * PORTFOLIO PAGE COMPONENT - PORTFOLIO.JSX
 * 
 * Dedicated portfolio page that showcases the Portfolio component.
 * This page serves as a standalone route for viewing the complete
 * portfolio showcase with full-screen layout.
 */

export default function PortfolioPage() {
  return (
    /**
     * PORTFOLIO PAGE LAYOUT
     * Renders the main Portfolio component within a dedicated page container.
     * This provides a focused viewing experience for the portfolio showcase.
     */
    <>
      <Navigation />
      <PortfolioComponent />
      <Footer />
    </>
  );
}