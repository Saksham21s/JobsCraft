import React from "react";

const ClassicResume = ({ formData }) => {
    return (
        <div className="classic-resume">
            <style>
                {`
                    .classic-resume {
                        font-family: 'Times New Roman', serif;
                        background-color: #f9f9f9;
                        color: #333;
                        padding: 20px;
                    }
                    .classic-resume .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .classic-resume .header .name {
                        font-size: 24px;
                        font-weight: bold;
                    }
                    .classic-resume .header .contact {
                        font-size: 14px;
                        color: #666;
                    }
                    .classic-resume .section {
                        margin-bottom: 20px;
                    }
                    .classic-resume .section h2 {
                        font-size: 18px;
                        font-weight: bold;
                        border-bottom: 2px solid #000;
                        padding-bottom: 5px;
                        margin-bottom: 10px;
                    }
                    .classic-resume .section p {
                        font-size: 14px;
                        line-height: 1.6;
                    }
                `}
            </style>
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
                <section className="section summary">
                    <h2>Summary</h2>
                    <p>{formData.summary}</p>
                </section>
            )}

            {/* Education */}
            {formData?.education?.length > 0 && formData.education.some(edu => edu.degree || edu.school) && (
                <section className="section education">
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
                <section className="section experience">
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
                <section className="section projects">
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
                <section className="section skills">
                    <h2>Skills</h2>
                    <p>{formData.skills}</p>
                </section>
            )}
        </div>
    );
};

export default ClassicResume;