import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/LandingPage";
import Builder from "./components/ResumeBuilderPage";
import NotFound from './components/NotFound';
import "./styles/App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Resume Template Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={errorBoundaryStyles.container}>
          <style>
            {`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
                100% { transform: translateY(0px); }
              }

              @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.03); }
                100% { transform: scale(1); }
              }

              .error-title {
                font-size: 28px;
                color: #333;
                font-weight: bold;
                margin-bottom: 15px;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
              }

              .error-message {
                font-size: 16px;
                color: #555;
                line-height: 1.6;
              }

              .button-container {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                gap: 15px;
              }

              .refresh-button, .home-button {
                background: linear-gradient(145deg, #6c5ce7, #a55eea);
                border: none;
                border-radius: 30px;
                padding: 10px 25px;
                color: white;
                font-size: 16px;
                font-weight: 600;
                text-transform: uppercase;
                cursor: pointer;
                box-shadow: 6px 6px 15px rgba(108, 92, 231, 0.3),
                  -6px -6px 15px rgba(255, 255, 255, 0.5);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                animation: pulse 2s infinite;
              }

              .refresh-button:hover, .home-button:hover {
                transform: translateY(-3px);
                box-shadow: 8px 8px 20px rgba(108, 92, 231, 0.4),
                  -8px -8px 20px rgba(255, 255, 255, 0.8);
              }

              .refresh-button:active, .home-button:active {
                transform: translateY(0);
                box-shadow: 2px 2px 5px rgba(108, 92, 231, 0.4),
                  -2px -2px 5px rgba(255, 255, 255, 0.5);
              }
            `}
          </style>

          <h3 className="error-title">Oops! Something Went Wrong</h3>
          <p className="error-message">
            There was a problem loading the resume template. Please try refreshing 
            the page or return to the homepage.
          </p>

          <div className="button-container">
            <button 
              className="refresh-button" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>

            <button 
              className="home-button"
              onClick={() => (window.location.href = '/')}
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

// Styles for the Error Boundary container
const errorBoundaryStyles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '50px auto',
    textAlign: 'center',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    boxShadow: `
      8px 8px 15px rgba(0, 0, 0, 0.1),
      -8px -8px 15px rgba(255, 255, 255, 0.5)
    `,
  },
};


export default App;
