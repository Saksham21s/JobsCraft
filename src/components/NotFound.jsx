import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <style>
        {`
          .not-found-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
            font-family: 'Inter', sans-serif;
            padding: 20px;
          }

          .content-box {
            background: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.1),
              0 1px 2px rgba(0, 0, 0, 0.05),
              inset 0 1px 1px rgba(255, 255, 255, 0.7);
            text-align: center;
            max-width: 600px;
            width: 100%;
            position: relative;
            overflow: hidden;
            animation: slideUp 0.5s ease-out;
          }

          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .error-code {
            font-size: 120px;
            font-weight: 800;
            color: transparent;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            line-height: 1;
            margin: 0;
            padding: 0;
            position: relative;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .error-code::after {
            content: '404';
            position: absolute;
            top: 2px;
            left: 2px;
            z-index: -1;
            color: rgba(99, 102, 241, 0.1);
            filter: blur(8px);
          }

          .title {
            font-size: 28px;
            font-weight: 600;
            color: #1f2937;
            margin: 20px 0 10px;
          }

          .description {
            color: #6b7280;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .buttons-container {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
          }

          .button {
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 500;
            font-size: 16px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            outline: none;
            position: relative;
            overflow: hidden;
          }

          .primary-button {
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          }

          .secondary-button {
            background: white;
            color: #6366f1;
            border: 2px solid #6366f1;
          }

          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
          }

          .button:active {
            transform: translateY(0);
          }

          .button::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
          }

          .button:hover::after {
            transform: translateX(100%);
          }

          .decoration {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
            filter: blur(40px);
            z-index: -1;
          }

          .decoration-1 {
            top: -100px;
            right: -100px;
          }

          .decoration-2 {
            bottom: -100px;
            left: -100px;
          }

          @media (max-width: 640px) {
            .content-box {
              padding: 30px 20px;
            }

            .error-code {
              font-size: 80px;
            }

            .title {
              font-size: 24px;
            }

            .description {
              font-size: 14px;
            }

            .buttons-container {
              flex-direction: column;
              gap: 10px;
            }

            .button {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="content-box">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        
        <h1 className="error-code">404</h1>
        <h2 className="title">Page Not Found</h2>
        <p className="description">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </p>

        <div className="buttons-container">
          <button 
            className="button primary-button"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
          <button 
            className="button secondary-button"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;