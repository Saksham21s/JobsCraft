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
                            Build My Resume 📝
                        </button>
                        <a href="https://www.linkedin.com/in/saksham-pandey21/" target="_blank" rel="noopener noreferrer" className="view-source-btn">
                            Follow Me
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ marginLeft: '8px', verticalAlign: 'middle' , fill: 'white'}}>
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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