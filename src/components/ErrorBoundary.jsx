import React from 'react';

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
                0% { transform: perspective(1000px) rotateX(2deg) translateY(0px); }
                50% { transform: perspective(1000px) rotateX(2deg) translateY(-10px); }
                100% { transform: perspective(1000px) rotateX(2deg) translateY(0px); }
              }

              @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
              }

              .error-icon {
                width: 70px;
                height: 70px;
                background: radial-gradient(circle at top left, #ff6b6b, #ff4757);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: pulse 2s infinite;
              }

              .error-title {
                color: #2d3436;
                font-size: 26px;
                font-weight: 600;
                margin: 20px 0;
                text-align: center;
                text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
              }

              .error-message {
                color: #636e72;
                font-size: 17px;
                line-height: 1.6;
                text-align: center;
                margin: 15px 0;
              }

              .refresh-button, .home-button {
                display: block;
                margin: 15px auto;
                padding: 12px 30px;
                background: linear-gradient(145deg, #6c5ce7, #a55eea);
                border: none;
                border-radius: 25px;
                color: white;
                font-size: 17px;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 4px 4px 10px rgba(108, 92, 231, 0.3),
                  -4px -4px 10px rgba(255, 255, 255, 0.8),
                  inset 1px 1px 2px rgba(255, 255, 255, 0.3);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }

              .refresh-button:hover, .home-button:hover {
                transform: translateY(-3px);
                box-shadow: 6px 6px 15px rgba(108, 92, 231, 0.4),
                  -6px -6px 15px rgba(255, 255, 255, 0.8);
              }

              .refresh-button:active, .home-button:active {
                transform: translateY(0);
                box-shadow: 2px 2px 5px rgba(108, 92, 231, 0.4),
                  -2px -2px 5px rgba(255, 255, 255, 0.8);
              }
            `}
          </style>

          <div className="error-icon">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h3 className="error-title">Oops! Something Went Wrong</h3>
          <p className="error-message">
            We encountered an issue while generating your resume. Don't worry, your data is safe! 
            Try refreshing the page or go back to the home page.
          </p>

          <button className="refresh-button" onClick={() => window.location.reload()}>
            Refresh Page
          </button>

          <button
            className="home-button"
            onClick={() => (window.location.href = '/')}
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const errorBoundaryStyles = {
  container: {
    position: 'relative',
    padding: '30px 40px',
    margin: '20px auto',
    maxWidth: '500px',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
    borderRadius: '15px',
    boxShadow: `
      8px 8px 15px #c3c3c3,
      -8px -8px 15px #ffffff,
      inset 2px 2px 5px rgba(255, 255, 255, 0.7),
      inset -2px -2px 5px rgba(0, 0, 0, 0.05)
    `,
    transform: 'perspective(1000px) rotateX(2deg)',
    transition: 'all 0.3s ease',
    animation: 'float 3s ease-in-out infinite',
  },
};

export default ErrorBoundary;
