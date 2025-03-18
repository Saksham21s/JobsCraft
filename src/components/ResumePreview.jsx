import React, { useRef, useState, useEffect } from "react";
import "../styles/Resume.css";
import { FaDownload, FaTimes, FaEye } from "react-icons/fa";

const ResumePreview = ({ formData }) => {
    const resumeRef = useRef(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        if (!formData) {
            const storedData = localStorage.getItem("formData");
            if (storedData) {
                formData = JSON.parse(storedData);
            }
        }
    }, [formData]);

    const handleAction = (type, e) => {
        if (!resumeRef.current) return;

        if (type === "preview") {
            setIsPopupOpen(true);
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
        setIsPopupOpen(false);
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
                        <div className="resume-popup-content">
                            <div className="resume-container">
                                {/* Header */}
                                {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github || formData?.portfolio) && (
                                    <section className="header">
                                        {formData.fullName && <h1 className="name">{formData.fullName}</h1>}
                                        <div className="contact">
                                            {formData.phone && <span>{formData.phone}</span>}
                                            {formData.email && <a href={`mailto:${formData.email}`}>{formData.email}</a>}
                                            {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
                                            {formData.github && <a href={formData.github}>GitHub</a>}
                                            {formData.portfolio && <a href={formData.portfolio}>Portfolio</a>}
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
                                                    <div className="education-details">
                                                        {edu.school && <span>{edu.school}</span>}
                                                        {(edu.startDate || edu.endDate) && (
                                                            <span>
                                                                {edu.startDate} - {edu.endDate}
                                                            </span>
                                                        )}
                                                        {edu.location && <span>{edu.location}</span>}
                                                    </div>
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
                                                    {(exp.startDate || exp.endDate) && (
                                                        <span>
                                                            {exp.startDate} - {exp.endDate}
                                                        </span>
                                                    )}
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
                                                    {proj.link && (
                                                        <div className="project-link">
                                                            <a href={proj.link}>{proj.link}</a>
                                                        </div>
                                                    )}
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
                </div>
            )}

            {/* Original Resume Container */}
            <div className="resume-container" ref={resumeRef}>
                {/* Header */}
                {(formData?.fullName || formData?.phone || formData?.email || formData?.linkedin || formData?.github || formData?.portfolio) && (
                    <section className="header">
                        {formData.fullName && <h1 className="name">{formData.fullName}</h1>}
                        <div className="contact">
                            {formData.phone && <span>{formData.phone}</span>}
                            {formData.email && <a href={`mailto:${formData.email}`}>{formData.email}</a>}
                            {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
                            {formData.github && <a href={formData.github}>GitHub</a>}
                            {formData.portfolio && <a href={formData.portfolio}>Portfolio</a>}
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
                                    {edu.degree && edu.school ? (
                                        <h3>{edu.degree} at {edu.school}</h3>
                                    ) : (
                                        edu.degree ? <h3>{edu.degree}</h3> : <h3>{edu.school}</h3>
                                    )}
                                    <div className="education-details">
                                        {(edu.startDate || edu.endDate) && (
                                            <span>
                                                {edu.startDate} - {edu.endDate}
                                            </span>
                                        )}
                                        {edu.location && <span>{edu.location}</span>}
                                    </div>
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
                                    {exp.title && exp.company ? (
                                        <h3>{exp.title} at {exp.company}</h3>
                                    ) : (
                                        exp.title ? <h3>{exp.title}</h3> : <h3>{exp.company}</h3>
                                    )}
                                    {(exp.startDate || exp.endDate) && (
                                        <span>
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    )}
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
                                    {proj.link && (
                                        <div className="project-link">
                                            <a href={proj.link}>{proj.link}</a>
                                        </div>
                                    )}
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
                <button className="action-btn" onClick={() => handleAction("preview")}>
                    <span>Preview</span>
                    <FaEye className="icon" />
                </button>
                <button className="action-btn" onClick={(e) => handleAction("download", e)}>
                    <span>Download</span>
                    <FaDownload className="icon" />
                </button>
            </div>
        </div>
    );
};

export default ResumePreview;