import React, { useState } from "react";
import "../styles/App.scss";

const FormSection = ({ data, setData, resetResume }) => {
  const [activeSection, setActiveSection] = useState("personal");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedArray = [...data[section]];
    updatedArray[index][field] = value;
    setData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  const addItem = (section, newItem) => {
    setData((prev) => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  const removeItem = (section, index) => {
    const updatedArray = [...data[section]];
    updatedArray.splice(index, 1);
    setData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  return (
    <div className="form-section">
      <div className="form-nav">
        {["personal", "education", "experience", "skills", "projects", "certifications", "languages", "interests"].map((section) => (
          <button key={section} onClick={() => setActiveSection(section)} className={activeSection === section ? "active" : ""}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      <div className="form-content">
        {activeSection === "personal" && (
          <>
            <label>Name</label>
            <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Your Name" />

            <label>Email</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="your.email@example.com" />

            <label>Phone</label>
            <input type="text" name="phone" value={data.phone} onChange={handleChange} placeholder="+1234567890" />

            <label>Profile Image URL</label>
            <input type="text" name="profileImage" value={data.profileImage} onChange={handleChange} placeholder="Image URL" />
          </>
        )}

        {activeSection === "education" && (
          <>
            {data.education.map((edu, index) => (
              <div key={index} className="form-item">
                <input type="text" value={edu.degree} onChange={(e) => handleArrayChange("education", index, "degree", e.target.value)} placeholder="Degree" />
                <input type="text" value={edu.institution} onChange={(e) => handleArrayChange("education", index, "institution", e.target.value)} placeholder="Institution" />
                <input type="text" value={edu.year} onChange={(e) => handleArrayChange("education", index, "year", e.target.value)} placeholder="Year" />
                <button onClick={() => removeItem("education", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("education", { degree: "", institution: "", year: "" })}>Add Education</button>
          </>
        )}

        {activeSection === "experience" && (
          <>
            {data.experience.map((exp, index) => (
              <div key={index} className="form-item">
                <input type="text" value={exp.position} onChange={(e) => handleArrayChange("experience", index, "position", e.target.value)} placeholder="Position" />
                <input type="text" value={exp.company} onChange={(e) => handleArrayChange("experience", index, "company", e.target.value)} placeholder="Company" />
                <input type="text" value={exp.year} onChange={(e) => handleArrayChange("experience", index, "year", e.target.value)} placeholder="Year" />
                <button onClick={() => removeItem("experience", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("experience", { position: "", company: "", year: "" })}>Add Experience</button>
          </>
        )}

        {activeSection === "skills" && (
          <>
            {data.skills.map((skill, index) => (
              <div key={index} className="form-item">
                <input type="text" value={skill} onChange={(e) => handleArrayChange("skills", index, "skill", e.target.value)} placeholder="Skill" />
                <button onClick={() => removeItem("skills", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("skills", "")}>Add Skill</button>
          </>
        )}

        {activeSection === "projects" && (
          <>
            {data.projects.map((project, index) => (
              <div key={index} className="form-item">
                <input type="text" value={project.title} onChange={(e) => handleArrayChange("projects", index, "title", e.target.value)} placeholder="Project Title" />
                <input type="text" value={project.description} onChange={(e) => handleArrayChange("projects", index, "description", e.target.value)} placeholder="Description" />
                <button onClick={() => removeItem("projects", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("projects", { title: "", description: "" })}>Add Project</button>
          </>
        )}

        {activeSection === "certifications" && (
          <>
            {data.certifications.map((cert, index) => (
              <div key={index} className="form-item">
                <input type="text" value={cert.name} onChange={(e) => handleArrayChange("certifications", index, "name", e.target.value)} placeholder="Certification Name" />
                <input type="text" value={cert.organization} onChange={(e) => handleArrayChange("certifications", index, "organization", e.target.value)} placeholder="Issuing Organization" />
                <button onClick={() => removeItem("certifications", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("certifications", { name: "", organization: "" })}>Add Certification</button>
          </>
        )}

        {activeSection === "languages" && (
          <>
            {data.languages.map((lang, index) => (
              <div key={index} className="form-item">
                <input type="text" value={lang} onChange={(e) => handleArrayChange("languages", index, "language", e.target.value)} placeholder="Language" />
                <button onClick={() => removeItem("languages", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("languages", "")}>Add Language</button>
          </>
        )}

        {activeSection === "interests" && (
          <>
            {data.interests.map((interest, index) => (
              <div key={index} className="form-item">
                <input type="text" value={interest} onChange={(e) => handleArrayChange("interests", index, "interest", e.target.value)} placeholder="Interest" />
                <button onClick={() => removeItem("interests", index)}>Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("interests", "")}>Add Interest</button>
          </>
        )}

        <button className="reset-btn" onClick={resetResume}>Reset Resume</button>
      </div>
    </div>
  );
};

export default FormSection;
