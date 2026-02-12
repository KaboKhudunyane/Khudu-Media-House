/**
 * APPLICATION ENTRY POINT - MAIN.JSX
 * 
 * This is the main entry file that bootstraps the React application.
 * It sets up the React root, error boundary, and provides global context providers.
 */

import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';

/**
 * ERROR BOUNDARY COMPONENT
 * 
 * A class component that catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * This prevents the entire app from crashing due to a single component error.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * STATIC METHOD TO UPDATE STATE WHEN ERROR OCCURS
   * This lifecycle method is called when an error is thrown in a child component.
   * It returns an object to update the state, indicating an error has occurred.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /**
   * ERROR HANDLING METHOD
   * Called after an error has been thrown by a descendant component.
   * Used for logging errors to error reporting services.
   */
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  /**
   * RENDER METHOD
   * Displays fallback UI when an error occurs, otherwise renders children normally.
   */
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600">Please refresh the page or contact support if the problem persists.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * APPLICATION RENDERING
 * 
 * Creates the React root and renders the application with:
 * - StrictMode for highlighting potential problems
 * - ErrorBoundary for graceful error handling
 * - HelmetProvider for React Helmet context
 * - Main App component
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
);
