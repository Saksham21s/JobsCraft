import React, { useState, useEffect } from "react";
import { FaSave } from 'react-icons/fa';

const FormInput = ({ activeTab, setActiveTab, setFormData }) => {
    const [localFormData, setLocalFormData] = useState(() => {
        const storedData = sessionStorage.getItem("formData");
        return storedData ? JSON.parse(storedData) : {
            fullName: "",
            jobTitle: "",
            email: "",
            phone: "",
            address: "",
            linkedin: "",
            github: "",
            portfolio: "",
            summary: "",
            education: [{ degree: "", school: "", startDate: "", endDate: "", location: "", gpa: "" }],
            experience: [{ title: "", company: "", startDate: "", endDate: "", location: "", description: "" }],
            projects: [{ name: "", link: "", description: "" }],
            skills: "",
            certifications: [{ name: "", issuer: "", issueDate: "", expirationDate: "", credentialID: "", credentialURL: "" }]
        };
    });

    const [expandedSections, setExpandedSections] = useState(() => {
        const storedSections = sessionStorage.getItem("expandedSections");
        return storedSections ? JSON.parse(storedSections) : {};
    });

    useEffect(() => {
        sessionStorage.setItem("formData", JSON.stringify(localFormData));
        sessionStorage.setItem("expandedSections", JSON.stringify(expandedSections));
    }, [localFormData, expandedSections]);

    useEffect(() => {
        const section = activeTab.toLowerCase();
        if (localFormData[section] && localFormData[section].length === 1) {
            setExpandedSections({ [`${section}-0`]: true });
        } else if (localFormData[section] && localFormData[section].length > 1) {
            setExpandedSections({ [`${section}-${localFormData[section].length - 1}`]: true });
        }
    }, [localFormData, activeTab]);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        let newValue = value;
    
        // Ensure first bullet point is automatically added
        if (e.target.tagName === "TEXTAREA") {
            if (!newValue.startsWith("• ")) {
                newValue = "• " + newValue;
            }
    
            // When Enter is pressed, add a new bullet point on a new line
            if (e.nativeEvent.inputType === "insertLineBreak") {
                newValue = value + "• ";
            }
        }
    
        setLocalFormData(prev => {
            const keys = name.split('.');
            let temp = { ...prev };
            let current = temp;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = newValue;
            return temp;
        });
    };
    
    const handleSave = () => {
        setFormData(localFormData);
    };

    const handleAdd = (section) => {
        setLocalFormData(prev => ({
            ...prev,
            [section]: [...prev[section], {}]
        }));
    };

    const handleDelete = (section, index) => {
        setLocalFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    };

    const toggleSection = (section, index) => {
        setExpandedSections(prev => ({
            ...prev,
            [`${section}-${index}`]: !prev[`${section}-${index}`]
        }));
    };

    const renderInputFields = () => {
        switch (activeTab) {
            case "Contact":
                return (
                    <>
                        <div className="form-row">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" name="fullName" value={localFormData.fullName} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" name="email" value={localFormData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row"> 
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" name="phone" value={localFormData.phone} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label>GitHub</label>
                                <input type="text" name="github" value={localFormData.github} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="input-group">
                                <label>Portfolio</label>
                                <input type="text" name="portfolio" value={localFormData.portfolio} onChange={handleChange} />
                            </div>
                            <div className="input-group">
                                <label>LinkedIn</label>
                                <input type="text" name="linkedin" value={localFormData.linkedin} onChange={handleChange} />
                            </div>
                        </div>
                    </>
                );
            case "Summary":
                return (
                    <div className="input-group g1">
                        <label>Summary</label>
                        <textarea name="summary" value={localFormData.summary} onChange={handleChange}></textarea>
                    </div>
                );
            case "Education":
                return (
                    <>
                        {localFormData.education.map((edu, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("education", index)}>
                                    <h3>Education {index + 1}</h3>
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete("education", index); }}>Delete</button>
                                </div>
                                {expandedSections[`education-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Study Program</label>
                                                <input type="text" name={`education.${index}.degree`} value={edu.degree || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Institution</label>
                                                <input type="text" name={`education.${index}.school`} value={edu.school || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Start Date</label>
                                                <input type="date" name={`education.${index}.startDate`} value={edu.startDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>End Date</label>
                                                <input type="date" name={`education.${index}.endDate`} value={edu.endDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Location</label>
                                                <input type="text" name={`education.${index}.location`} value={edu.location || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>GPA</label>
                                                <input type="number" name={`education.${index}.gpa`} value={edu.gpa || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                );
            case "Experience":
                return (
                    <>
                        {localFormData.experience.map((exp, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("experience", index)}>
                                    <h3>Experience {index + 1}</h3>
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete("experience", index); }}>Delete</button>
                                </div>
                                {expandedSections[`experience-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Job Title</label>
                                                <input type="text" name={`experience.${index}.title`} value={exp.title || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Company</label>
                                                <input type="text" name={`experience.${index}.company`} value={exp.company || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Start Date</label>
                                                <input type="date" name={`experience.${index}.startDate`} value={exp.startDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>End Date</label>
                                                <input type="date" name={`experience.${index}.endDate`} value={exp.endDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Location</label>
                                                <input type="text" name={`experience.${index}.location`} value={exp.location || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Description</label>
                                                <textarea name={`experience.${index}.description`} value={exp.description || ""} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>))}
                    </>
                );
            case "Projects":
                return (
                    <>
                        {localFormData.projects.map((proj, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("projects", index)}>
                                    <h3>Project {index + 1}</h3>
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete("projects", index); }}>Delete</button>
                                </div>
                                {expandedSections[`projects-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Project Name</label>
                                                <input type="text" name={`projects.${index}.name`} value={proj.name || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Link</label>
                                                <input type="text" name={`projects.${index}.link`} value={proj.link || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Description</label>
                                                <textarea name={`projects.${index}.description`} value={proj.description || ""} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                );
            case "Skills":
                return (
                    <div className="input-group g1">
                        <label>Skills</label>
                        <textarea name="skills" value={localFormData.skills} onChange={handleChange}></textarea>
                    </div>
                );
            case "Certifications":
                return (
                    <>
                        {localFormData.certifications.map((cert, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("certifications", index)}>
                                    <h3>Certification {index + 1}</h3>
                                    <button onClick={(e) => { e.stopPropagation(); handleDelete("certifications", index); }}>Delete</button>
                                </div>
                                {expandedSections[`certifications-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Certification Name</label>
                                                <input type="text" name={`certifications.${index}.name`} value={cert.name || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Issuer</label>
                                                <input type="text" name={`certifications.${index}.issuer`} value={cert.issuer || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Issue Date</label>
                                                <input type="date" name={`certifications.${index}.issueDate`} value={cert.issueDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Expiration Date</label>
                                                <input type="date" name={`certifications.${index}.expirationDate`} value={cert.expirationDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Credential ID</label>
                                                <input type="text" name={`certifications.${index}.credentialID`} value={cert.credentialID || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Credential URL</label>
                                                <input type="text" name={`certifications.${index}.credentialURL`} value={cert.credentialURL || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="form-section">
            <div className="nav-tabs">
                {["Contact", "Summary", "Education", "Experience", "Projects", "Skills", "Certifications"].map((tab) => (
                    <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="form-container">
                <div className="add-button-container">
                    {activeTab !== "Summary" && activeTab !== "Skills" && activeTab !== "Contact" && (
                        <button type="button" onClick={() => handleAdd(activeTab.toLowerCase())}>+ Add {activeTab}</button>
                    )}
                </div>
                {renderInputFields()}
                <div className="form-actions">
                    <div></div>
                    <button type="button" className="save-btn" onClick={handleSave}>
                        <span>Save</span>
                        <FaSave className="icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormInput;