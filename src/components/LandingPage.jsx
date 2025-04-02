import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import resume from "../assets/Resume.png";
import NavBar from './NavBar';

const LandingPage = () => {
    const navigate = useNavigate();
    const [style, setStyle] = useState({ transform: "rotateY(0deg) rotateX(0deg)" });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 20;
        const y = -(clientY - top - height / 2) / 20;
        setStyle({ transform: `rotateY(${x}deg) rotateX(${y}deg)` });
    };

    return (
        <div className="landing-container">
            <NavBar />
            <div className="content-wrapper">
                <div className="text-section">
                    <h2 className="landing-subtitle">Ultimate ATS Friendly Resume Builder</h2>
                    <h1 className="landing-title">Craft a Professional Resume in Minutes</h1>
                    <p className="landing-description">
                        JobsCraft empowers you to create an ATS-optimized, job-winning resume effortlessly.
                        No sign-up required—just enter your details, preview in real-time, and download a
                        polished, industry-standard resume in A4 PDF format.
                    </p>
                    <div className="button-group">
                        <button className="create-resume-btn" onClick={() => navigate("/builder")}>
                            Build Resume 📝
                        </button>
                        <a href="https://jobscraft-interview.vercel.app/" target="_blank" rel="noopener noreferrer" className="view-source-btn">
                            Analyze Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ marginLeft: '8px', verticalAlign: 'middle', fill: 'white' }}>
                                <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-4.23c0-3.59-2.91-6.5-6.5-6.5S3.5 5.91 3.5 9.5 6.41 16 10 16c1.61 0 3.09-.59 4.23-1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-5.5 0c-2.76 0-5-2.24-5-5S7.24 4 10 4s5 2.24 5 5-2.24 5-5 5z" />
                            </svg>

                        </a>
                    </div>
                </div>
                <div className="resume-section">
                    <img
                        src={resume}
                        alt="Resume Preview"
                        className="resume-image"
                        style={style}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setStyle({ transform: "rotateY(0deg) rotateX(0deg)" })}
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;