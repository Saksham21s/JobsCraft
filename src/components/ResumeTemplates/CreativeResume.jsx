import React from "react";

const ModernResume = ({ formData }) => {
    return (
        <div>
            <style>
                {`
    /* Header Section */
    .header {
        text-align: center;
        margin-bottom: 10px;
        background-color:rgb(240, 240, 240);
        border-radius:3px;
    }

    .header .name {
        font-size: 1.2rem;
        letter-spacing:1.2px;
        font-weight: bold;
        color: #111;
        margin-bottom: 5px;
        padding-top:5px;
        font-family: 'Times-Bold';
    }

    .header .contact {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 0.5rem;
        color: #111;
        flex-wrap: wrap;
        padding-bottom:5px;
    }

    .header .contact span:not(:last-child)::after,
    .header .contact a:not(:last-child)::after {
        content: "|";
        margin-left: 8px;
    }

    .header .contact a {
        color: #111;
        text-decoration: none;
    }

    .header .contact a:hover {
        color:#333; 
        text-decoration: underline;
    }

    /* Skills Section */
.skills {
    margin-bottom: 10px;
}

.skills h2 {
   font-size: 0.8rem;
    font-weight: 600;
    background-color: rgb(240, 240, 240);
    color: #111;
    text-align: center;
    margin-bottom: 5px;
    padding: 3px;
}

/* Skill Items as Colorful Badges */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.skill-item {
    background-color:lightgrey;
    color: #111;
    padding: 6px 10px;
    font-size: 0.55rem;
    border-radius:3px;
    text-transform: capitalize;
    display: inline-block;
}

    /* Common Section Styling */
    .summary,
    .education,
    .experience,
    .projects,
    .skills,
    .certifications {
        margin-bottom: 8px;
    }

    .summary h2,
    .education h2,
    .experience h2,
    .projects h2,
    .skills h2,
    .certifications h2 {
       font-size: 0.8rem;
    font-weight: 600;
    background-color: rgb(240, 240, 240);
    color: #000;
    text-align: center;
    margin-bottom: 5px;
    padding: 3px;
    }

    .summary p,
    .education-item span,
    .experience-item span,
    .experience-item p,
    .project-item a,
    .skills p,
    .certifications-item span {
        font-size: 0.55rem;
        color: #666;
        font-weight: 600;
        line-height: 1.4;
    }

    /* Education & Experience */
    .education-item,
    .experience-item,
    .project-item,
    .skills,
    .certifications-item {
        margin-bottom: 0.5rem;
    }

    .education-item h3,
    .experience-item h3,
    .project-item h3,
    .certifications-item h3 {
        font-size: 0.7rem;
        font-weight: bold;
        color: #222;
    }

    .education-item .date,
    .experience-item .date {
        float: right;
        color: #666;
        font-size: 0.55rem;
    }

    /* Projects */
    .projects {
        margin-bottom: 15px;
    }

    .project-item {
        margin-bottom: 10px;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        margin-bottom :5px;
    }

    .project-item p {
        font-size: 0.55rem;
        color: #666;
        line-height: 1.4;
    }

    /*  Project & Certification Links (Same Styling) */
    .project-item a,
    .credential-details a {
        font-size: 0.5rem;
        color: #3498db;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease-in-out;
    }

    .project-item a:hover,
    .credential-details a:hover {
        text-decoration: underline;
        color: #0073e6; 
    }

    /* Certifications Section */
    .certifications-item {
        margin-bottom: 0.7rem;
    }

    .certifications-item .cert-title {
        font-size: 0.7rem;
        font-weight: bold;
        color: #222;
        margin-bottom:5px;
    }

 /* Common Row Styling */
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

/* Ensuring the credentials stay on the same row */
.credential-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    white-space: nowrap;  /* Force everything on the same line */
    gap: 15px;
}

/* Credential ID & URL */
.credential-details {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

/* Issue & Expiry Dates */
.cert-date {
    display: flex;
    font-weight: 600;
    flex-shrink: 0;
    gap:5px;
}

/* Making sure links look clean */
.credential-details a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.credential-details a:hover {
    text-decoration: underline;
}



    /* Mobile Responsive */
    @media (max-width: 480px) {
        .header .contact {
            font-size: 0.4rem;
        }

        .summary p,
        .education-item span,
        .experience-item span,
        .project-item a,
        .skills p,
        .certifications-item span {
            font-size: 0.4rem;
        }

        .education-item h3,
        .experience-item h3,
        .project-item h3,
        .certifications-item h3 {
            font-size: 0.6rem;
        }

        .experience-item p,
        .project-item p {
            font-size: 0.4rem;
        }

        .certifications-item .cert-title {
            font-size: 0.6rem;
        }

        /* Issue & Expire Dates Adjusted for Mobile */
        .certifications-item .cert-date {
            font-size: 0.5rem;
            flex-wrap: wrap;
            gap: 10px;
        }

        /* Credential Details Responsive */
        .credential-details {
            flex-direction: column;
            align-items: flex-start;
        }

        .credential-details span,
        .credential-details a {
            font-size: 0.5rem;
        }


    }
    `}
            </style>

            {/* Header */}
            {(formData?.fullName ||
                formData?.phone ||
                formData?.email ||
                formData?.linkedin ||
                formData?.github ||
                formData?.portfolio) && (
                    <section className="header">
                        {formData.fullName && <h1 className="name">{formData.fullName}</h1>}
                        <div className="contact">
                            {formData.phone && <span>{formData.phone}</span>}
                            {formData.email && (
                                <a href={`mailto:${formData.email}`}>{formData.email}</a>
                            )}
                            {formData.linkedin && <a href={formData.linkedin}>LinkedIn</a>}
                            {formData.github && <a href={formData.github}>GitHub</a>}
                            {formData.portfolio && <a href={formData.portfolio}>Portfolio</a>}
                        </div>
                    </section>
                )}

            {/* Summary Section */}
            {formData?.summary && formData.summary.trim() && (
                <section className="summary">
                    <h2>Summary</h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: formData.summary.replace(/\n/g, "<br/>"),
                        }}
                    ></p>
                </section>
            )}

            {/* Education */}
            {formData?.education?.length > 0 &&
                formData.education.some((edu) => edu.degree || edu.school) && (
                    <section className="education">
                        <h2>Education</h2>
                        {formData.education.map(
                            (edu, index) =>
                                (edu.degree || edu.school) && (
                                    <div key={index} className="education-item">
                                        {/* Degree, School & Location  */}
                                        <h3>
                                            {edu.degree}
                                            {edu.school && ` at ${edu.school}`}
                                            {edu.location && `, ${edu.location}`}
                                        </h3>

                                        {/* GPA & Start-End Date  */}
                                        <div className="education-details">
                                            {(edu.startDate || edu.endDate) && (
                                                <span className="date">
                                                    ({edu.startDate ? edu.startDate : "N/A"} - {edu.endDate ? edu.endDate : "Present"})
                                                </span>
                                            )}
                                            {edu.gpa && <span> GPA: {edu.gpa}</span>}
                                        </div>


                                    </div>
                                )
                        )}
                    </section>
                )}

            {/* Experience Section */}
            {formData?.experience?.length > 0 &&
                formData.experience.some((exp) => exp.title || exp.company) && (
                    <section className="experience">
                        <h2>Experience</h2>
                        {formData.experience.map(
                            (exp, index) =>
                                (exp.title || exp.company) && (
                                    <div key={index} className="experience-item">
                                        {exp.title && (
                                            <h3>
                                                {exp.title} at {exp.company}
                                            </h3>
                                        )}
                                        {exp.location && <span> Location: {exp.location}</span>}
                                        {(exp.startDate || exp.endDate !== undefined) && (
                                            <span className="date">
                                                &nbsp;({exp.startDate ? exp.startDate : "N/A"} - {exp.endDate && exp.endDate.trim() !== "" ? exp.endDate : "Present"})
                                            </span>
                                        )}

                                        <br />
                                        {exp.description && (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: exp.description.replace(/\n/g, "<br/>"),
                                                }}
                                            ></p>
                                        )}
                                    </div>
                                )
                        )}
                    </section>
                )}

            {/* Projects Section */}
            {formData?.projects?.length > 0 &&
                formData.projects.some((proj) => proj.name || proj.description) && (
                    <section className="projects">
                        <h2>Projects</h2>
                        {formData.projects.map(
                            (proj, index) =>
                                (proj.name || proj.description) && (
                                    <div key={index} className="project-item">
                                        <div className="project-header">
                                            {proj.name && <h3>{proj.name}</h3>}
                                            {proj.link && (
                                                <a href={proj.link} className="project-link">
                                                    {proj.link}
                                                </a>
                                            )}
                                        </div>
                                        {proj.description && (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: proj.description.replace(/\n/g, "<br/>"),
                                                }}
                                            ></p>
                                        )}
                                    </div>
                                )
                        )}
                    </section>
                )}

            {/* Skills Section */}
            {formData?.skills && formData.skills.trim() && (
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="skills-container">
                        {formData.skills.split(',').map((skill, index) => (
                            <div key={index} className="skill-item">{skill.trim()}</div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications */}
            {formData?.certifications?.length > 0 &&
                formData.certifications.some((cert) => cert.name || cert.issuer) && (
                    <section className="certifications">
                        <h2>Certifications</h2>
                        {formData.certifications.map(
                            (cert, index) =>
                                (cert.name || cert.issuer) && (
                                    <div key={index} className="certifications-item">
                                        <p className="cert-title">
                                            {cert.name} {cert.issuer && `by ${cert.issuer}`}
                                        </p>

                                        {(cert.credentialID || cert.credentialURL || cert.issueDate || cert.expirationDate) && (
                                           <div className="row credential-row">
                                           <div className="credential-details">
                                               {cert.credentialID && <span>{cert.credentialID}</span>}
                                               {cert.credentialURL && (
                                                   <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer">
                                                       ({cert.credentialURL})
                                                   </a>
                                               )}
                                           </div>
                                   
                                           {/* Issue & Expiry Date */}
                                           <div className="cert-date">
                                               <span>Issue: {cert.issueDate || "N/A"}</span>
                                               <span>Expire: {cert.expirationDate || "No Expiry"}</span>
                                           </div>
                                       </div>
                                        )}
                                    </div>
                                )
                        )}
                    </section>
                )}
        </div>
    );
};

export default ModernResume;
