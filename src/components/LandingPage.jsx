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
        const x = (clientX - left - width / 2) / 25;
        const y = -(clientY - top - height / 2) / 25;
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
                            Build My Resume 📝
                        </button>
                        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="view-source-btn">
                            View Source ⚙️
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