import React from "react";
import "../styles/App.scss";

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview">
      <header className="resume-header">
        {data.profileImage && <img src={data.profileImage} alt="Profile" className="profile-img" />}
        <div className="header-text">
          <h1>{data.name || "Your Name"}</h1>
          <p>{data.email || "your.email@example.com"} | {data.phone || "+1234567890"}</p>
        </div>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        {data.education.length > 0 ? (
          data.education.map((edu, index) => (
            <div key={index} className="resume-item">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}, {edu.year}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your education details</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {data.experience.length > 0 ? (
          data.experience.map((exp, index) => (
            <div key={index} className="resume-item">
              <h3>{exp.position}</h3>
              <p>{exp.company}, {exp.year}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your work experience</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        {data.skills.length > 0 ? (
          <ul className="skills-list">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="placeholder">Add your skills</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        {data.projects.length > 0 ? (
          data.projects.map((project, index) => (
            <div key={index} className="resume-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your projects</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        {data.certifications.length > 0 ? (
          data.certifications.map((cert, index) => (
            <div key={index} className="resume-item">
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
            </div>
          ))
        ) : (
          <p className="placeholder">Add your certifications</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Languages</h2>
        {data.languages.length > 0 ? (
          <ul className="skills-list">
            {data.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        ) : (
          <p className="placeholder">Add languages you know</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Interests</h2>
        {data.interests.length > 0 ? (
          <ul className="skills-list">
            {data.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p className="placeholder">Add your interests</p>
        )}
      </section>
    </div>
  );
};

export default ResumePreview;
