import React from "react";

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

const ModernResume = ({ formData }) => {
  return (
    <div className="modern-resume">
      <style>
        {`
                .modern-resume {
                    font-family: 'Inter', sans-serif;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    color: #1a1a1a;
                    background: white;
                    overflow-y: auto;
                    font-size: 12px;
                }

                .full-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color:rgb(255, 255, 255);
                    text-align: center;
                    background-color :rgb(92, 168, 255);
                    padding:10px;
                }

                .content-container {
                    display: grid;
                    grid-template-columns: 110px 1fr;
                    gap: 2.2rem;
                }

                .left-column {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .right-column {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .section-header {
                    font-size: 11px;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin-bottom: 6px;
                    text-transform: uppercase;
                    border-bottom: 1px solid #6366f1;
                    padding-bottom: 2px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 10px;
                    color: #3f3f46;
                    margin-bottom: 4px;
                }

                .contact-item a {
                    color: #3f3f46;
                    text-decoration: none;
                }

                .contact-item a:hover {
                    color: #6366f1;
                }

                .contact-icon {
                    width: 12px;
                    height: 12px;
                    color: #6366f1;
                    flex-shrink: 0;
                }

                  .skills-grid {
                  display: flex;  
                  flex-wrap: wrap;
                  gap: 8px;
                }
                .skill-item {
                    font-size: 9px;
                    color: #3f3f46;
                    background: #f4f4f5;
                    padding: 5px 10px;
                    width: fit-content;
                    border-radius: 10px;
                    text-align: center;
                }

                .skill-item:hover {
                    background: #6366f1;
                    color: white;
                }

                 .certification-item {
                  margin-bottom: 10px; 
                }

                .certification-title {
                  font-size: 10px;
                  font-weight: 600;
                  color: #1a1a1a;
                }

                .at-text {
                  font-size: 10px;
                  color: #52525b;
                  margin-left: 4px;
                }

                .certification-credential {
                  font-size: 10px;
                  color: #3f3f46;
                }

                .credential-link {
                  color: #6366f1;
                  text-decoration: none;
                }

                .credential-link:hover {
                  color: #4f46e5;
                }

                .certification-date {
                  font-size: 10px;
                  color: #71717a;
                  margin-top: 4px;
                }


                .experience-item,
                .project-item,{
                    margin-bottom: 10px;
                }

                .item-title {
                    font-size: 11px;
                    font-weight: 600;
                    color: #1a1a1a;
                    margin-bottom: 2px;
                }

                .item-subtitle {
                    font-size: 10px;
                    color: #3f3f46;
                    margin-bottom: 2px;
                }

                .item-date {
                    font-size: 9px;
                    color: #71717a;
                    margin-bottom: 2px;
                }

                .item-description {
                    font-size: 10px;
                    color: #52525b;
                    line-height: 1.3;
                }

                .project-title-container {
                 display: flex;
                 justify-content: space-between;
                 align-items: center; 
                }

                .item-title {
                 margin-right: 10px;
                }

                .project-link {
                  font-size: 10px;
                  color: #6366f1;
                  text-decoration: none;
                }

                .project-link:hover {
                  color: #4f46e5;
                }

                .experience-item > p,
                .project-item > p,
                .education-item > p {
                    margin-left: 5px; 
                }
                .education-date-row {
                  display: flex;
                  justify-content: space-between; 
                  align-items: center;
                }

                .edu-gpa {
                  font-size: 10px;
                  color: #71717a;
                  font-weight: 500;
                }

                .item-date {
                  font-size: 9px;
                  color: #71717a;
                }

                `}
      </style>

      {/* Full Name at the Top */}
      {formData.fullName && (
        <div className="full-name">{capitalizeWords(formData.fullName)}</div>
      )}

      {/* Content Container */}
      <div className="content-container">
        {/* Left Column */}
        <div className="left-column">
          {/* Contact Section */}
          <section>
            <h2 className="section-header">Contact</h2>
            {formData.phone && (
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
                {formData.phone}
              </div>
            )}
            {formData.email && (
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href={`mailto:${formData.email}`}>{formData.email}</a>
              </div>
            )}
            {formData.linkedin && (
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a href={formData.linkedin}>LinkedIn</a>
              </div>
            )}
            {formData.github && (
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a href={formData.github}>GitHub</a>
              </div>
            )}
            {formData.portfolio && (
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm-9 8.23l8 4.363v8.607l-8-4.268v-8.702zm10 12.97v-8.6l8-4.269v8.6l-8 4.269z" />
                </svg>
                <a href={formData.portfolio}>Portfolio</a>
              </div>
            )}
          </section>

          {/* Education Section */}
          {formData?.education?.length > 0 && (
            <section>
              <h2 className="section-header">Education</h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="item-title">
                    <span className="dot">•</span> {edu.degree}
                  </h3>
                  <p className="item-subtitle">{edu.school}</p>
                  <p className="item-date">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </p>
                  {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}

           {/* Skills Section */}
           {formData?.skills && (
            <section>
              <h2 className="section-header">Skills</h2>
              <div className="skills-grid">
                {formData.skills.split(",").map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.trim()}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {formData?.certifications?.length > 0 && (
            <section>
              <h2 className="section-header">Certifications</h2>
              {formData.certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <h3 className="certification-title">
                    <span className="dot">•</span> {cert.name}
                  </h3>
                  <p className="item-subtitle">{cert.issuer}</p>

                  {cert.credential && (
                    <p className="certification-credential">
                      Credential: <a href={cert.link} className="credential-link">{cert.credential}</a>
                    </p>
                  )}
                  <p className="certification-date">
                    {cert.issueDate} - {cert.expirationDate || "No Expiry"}
                  </p>
                </div>
              ))}
            </section>
          )}

        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Summary Section */}
          {formData?.summary && (
            <section>
              <h2 className="section-header">Summary</h2>
              <p className="item-description">{formData.summary}</p>
            </section>
          )}

          {/* Projects Section */}
          {formData?.projects?.length > 0 && (
            <section>
              <h2 className="section-header">Projects</h2>
              {formData.projects.map((proj, index) => (
                <div key={index} className="project-item">
                  <div className="project-title-container">
                    <h3 className="item-title">
                      <span className="dot">•</span> {proj.name}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} className="project-link">
                        View Project
                      </a>
                    )}
                  </div>
                  <p className="item-description">{proj.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Experience Section */}
          {formData?.experience?.length > 0 && (
            <section>
              <h2 className="section-header">Experience</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3 className="item-title">
                    <span className="dot">•</span> {exp.title}
                  </h3>
                  <p className="item-subtitle">{exp.company}</p>
                  <p className="item-date">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </p>
                  <p className="item-description">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default ModernResume;
