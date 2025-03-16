import React, { useRef, useState } from "react";
import "../styles/App.css";
import { FaDownload, FaTimes } from "react-icons/fa";

const ResumePreview = ({ formData }) => {
    const resumeRef = useRef(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleAction = (type, e) => {
        if (!resumeRef.current) return;

        if (type === "preview") {
            setIsPopupOpen(true); // Open the popup
        } else if (type === "download") {
            const button = e.currentTarget;
            button.classList.add("clicked");
            setTimeout(() => button.classList.remove("clicked"), 500);

            const resumeHTML = resumeRef.current.outerHTML;
            const element = document.createElement("a");
            const file = new Blob([resumeHTML], { type: "text/html" });
            element.href = URL.createObjectURL(file);
            element.download = "resume.html";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false); // Close the popup
    };

    return (
        <div className="resume-preview">
            {/* Popup Overlay */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>
                            <FaTimes />
                        </button>
                        {/* Resume Content in Popup */}
                        <div className="resume-popup-content">
                            {/* Header */}
                            {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github) && (
                                <section className="header">
                                    {formData.fullName && <h1 className="name">{formData.fullName}</h1>}
                                    <div className="contact">
                                        {formData.phone && <span>{formData.phone}</span>}
                                        {formData.email && <a href={`mailto:${formData.email}`}>{formData.email}</a>}
                                        {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
                                        {formData.github && <a href={formData.github}>GitHub</a>}
                                    </div>
                                </section>
                            )}

                            {/* Summary */}
                            {formData?.summary && formData.summary.trim() && (
                                <section className="summary">
                                    <h2>Summary</h2>
                                    <p>{formData.summary}</p>
                                </section>
                            )}

                            {/* Education */}
                            {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
                                <section className="education">
                                    <h2>Education</h2>
                                    {formData.education.map((edu, index) => (
                                        (edu.degree || edu.school) && (
                                            <div key={index} className="education-item">
                                                {edu.degree && <h3>{edu.degree}</h3>}
                                                {edu.school && <span>{edu.school} ({edu.year})</span>}
                                            </div>
                                        )
                                    ))}
                                </section>
                            )}

                            {/* Experience */}
                            {formData?.experience?.length > 0 && formData.experience.some(exp => exp.title || exp.company) && (
                                <section className="experience">
                                    <h2>Experience</h2>
                                    {formData.experience.map((exp, index) => (
                                        (exp.title || exp.company) && (
                                            <div key={index} className="experience-item">
                                                {exp.title && <h3>{exp.title} at {exp.company}</h3>}
                                                {exp.duration && <span>{exp.duration}</span>}
                                                {exp.description && <p>{exp.description}</p>}
                                            </div>
                                        )
                                    ))}
                                </section>
                            )}

                            {/* Projects */}
                            {formData?.projects?.length > 0 && formData.projects.some(proj => proj.name || proj.description) && (
                                <section className="projects">
                                    <h2>Projects</h2>
                                    {formData.projects.map((proj, index) => (
                                        (proj.name || proj.description) && (
                                            <div key={index} className="project-item">
                                                {proj.name && <h3>{proj.name}</h3>}
                                                {proj.link && <a href={proj.link}>{proj.link}</a>}
                                                {proj.description && <p>{proj.description}</p>}
                                            </div>
                                        )
                                    ))}
                                </section>
                            )}

                            {/* Skills */}
                            {formData?.skills && formData.skills.trim() && (
                                <section className="skills">
                                    <h2>Skills</h2>
                                    <p>{formData.skills}</p>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Original Resume Container */}
            <div className="resume-container" ref={resumeRef}>
                {/* Header */}
                {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github) && (
                    <section className="header">
                        {formData.fullName && <h1 className="name">{formData.fullName}</h1>}
                        <div className="contact">
                            {formData.phone && <span>{formData.phone}</span>}
                            {formData.email && <a href={`mailto:${formData.email}`}>{formData.email}</a>}
                            {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
                            {formData.github && <a href={formData.github}>GitHub</a>}
                        </div>
                    </section>
                )}

                {/* Summary */}
                {formData?.summary && formData.summary.trim() && (
                    <section className="summary">
                        <h2>Summary</h2>
                        <p>{formData.summary}</p>
                    </section>
                )}

                {/* Education */}
                {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
                    <section className="education">
                        <h2>Education</h2>
                        {formData.education.map((edu, index) => (
                            (edu.degree || edu.school) && (
                                <div key={index} className="education-item">
                                    {edu.degree && <h3>{edu.degree}</h3>}
                                    {edu.school && <span>{edu.school} ({edu.year})</span>}
                                </div>
                            )
                        ))}
                    </section>
                )}

                {/* Experience */}
                {formData?.experience?.length > 0 && formData.experience.some(exp => exp.title || exp.company) && (
                    <section className="experience">
                        <h2>Experience</h2>
                        {formData.experience.map((exp, index) => (
                            (exp.title || exp.company) && (
                                <div key={index} className="experience-item">
                                    {exp.title && <h3>{exp.title} at {exp.company}</h3>}
                                    {exp.duration && <span>{exp.duration}</span>}
                                    {exp.description && <p>{exp.description}</p>}
                                </div>
                            )
                        ))}
                    </section>
                )}

                {/* Projects */}
                {formData?.projects?.length > 0 && formData.projects.some(proj => proj.name || proj.description) && (
                    <section className="projects">
                        <h2>Projects</h2>
                        {formData.projects.map((proj, index) => (
                            (proj.name || proj.description) && (
                                <div key={index} className="project-item">
                                    {proj.name && <h3>{proj.name}</h3>}
                                    {proj.link && <a href={proj.link}>{proj.link}</a>}
                                    {proj.description && <p>{proj.description}</p>}
                                </div>
                            )
                        ))}
                    </section>
                )}

                {/* Skills */}
                {formData?.skills && formData.skills.trim() && (
                    <section className="skills">
                        <h2>Skills</h2>
                        <p>{formData.skills}</p>
                    </section>
                )}
            </div>

            {/* Buttons */}
            <div className="resume-buttons">
                <button className="action-btn" onClick={(e) => handleAction("preview", e)}>Preview 👁️</button>
                <button className="action-btn" onClick={(e) => handleAction("download", e)}>
                    <span>Download</span>
                    <FaDownload className="icon" />
                </button>
            </div>
        </div>
    );
};

export default ResumePreview;