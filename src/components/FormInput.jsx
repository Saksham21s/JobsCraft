import React, { useState } from "react";
import { FaSave, FaTrash, FaEdit, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const FormInput = ({ activeTab, setActiveTab, setFormData }) => {
    const [localFormData, setLocalFormData] = useState(() => {
        const storedData = localStorage.getItem("formData");
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
        const storedSections = localStorage.getItem("expandedSections");
        return storedSections ? JSON.parse(storedSections) : {
            "education-0": true,
            "experience-0": true,
            "projects-0": true,
            "certifications-0": true
        };
    });

    const updateNestedState = (prevState, name, value) => {
        const keys = name.split('.');
        const newState = JSON.parse(JSON.stringify(prevState));
        let current = newState;

        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!current[key]) {
                current[key] = isNaN(keys[i + 1]) ? {} : [];
            }
            current = current[key];
        }

        current[keys[keys.length - 1]] = value;
        return newState;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFormData(prev => {
            let newValue = value;
            if (e.target.tagName === "TEXTAREA" && e.nativeEvent.inputType === "insertLineBreak") {
                newValue = value + "• ";
            }
            return updateNestedState(prev, name, newValue);
        });
    };

    const handleKeyDown = (e) => {
        if (e.target.tagName === "TEXTAREA" && e.key === "Backspace") {
            const { value, selectionStart, name } = e.target;
            if (value.substring(selectionStart - 2, selectionStart) === "\n•") {
                e.preventDefault();
                const newValue = value.substring(0, selectionStart - 2) + value.substring(selectionStart);
                e.target.value = newValue;
                setLocalFormData(prev => updateNestedState(prev, name, newValue));
            }
        }
    };

    const handleSave = () => {
        let isValid = true;
        let errorMessage = "";

        switch (activeTab) {
            case "Contact":
                if (!localFormData.fullName.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your full name";
                } else if (!localFormData.email.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your email";
                } else if (!localFormData.phone.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your phone number";
                }
                break;
            case "Summary":
                if (!localFormData.summary.trim()) {
                    isValid = false;
                    errorMessage = "Please enter a professional summary";
                }
                break;
            case "Education":
                if (localFormData.education.length === 0 || !localFormData.education[0].degree.trim() || !localFormData.education[0].school.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your education details";
                }
                break;
            case "Experience":
                if (localFormData.experience.length === 0 || !localFormData.experience[0].title.trim() || !localFormData.experience[0].company.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your work experience details";
                }
                break;
            case "Projects":
                if (localFormData.projects.length === 0 || !localFormData.projects[0].name.trim() || !localFormData.projects[0].description.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your project details";
                }
                break;
            case "Skills":
                if (!localFormData.skills.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your skills";
                }
                break;
            case "Certifications":
                if (localFormData.certifications.length === 0 || !localFormData.certifications[0].name.trim() || !localFormData.certifications[0].issuer.trim()) {
                    isValid = false;
                    errorMessage = "Please enter your certification details";
                }
                break;
            default:
                break;
        }

        if (!isValid) {
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        localStorage.setItem("formData", JSON.stringify(localFormData));
        setFormData(localFormData);
        toast.success(`${activeTab} section saved successfully!`, {
            position: "top-center",
            autoClose: 2000,
        });
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
        const sectionKey = `${section}-${index}`;
        setExpandedSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey]
        }));
    };

    const handleMoveUp = (section, index) => {
        if (index === 0) return;
        setLocalFormData(prev => {
            const newArray = [...prev[section]];
            [newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index]];
            return { ...prev, [section]: newArray };
        });
    };

    const handleMoveDown = (section, index) => {
        if (index === localFormData[section].length - 1) return;
        setLocalFormData(prev => {
            const newArray = [...prev[section]];
            [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
            return { ...prev, [section]: newArray };
        });
    };

    const renderInputFields = () => {
        switch (activeTab) {
            case "Contact":
                return (
                    <>
                        <div className="form-row">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={localFormData.fullName || ""} // Prevent undefined
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="johndoe@example.com"
                                    value={localFormData.email || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="(123) 456-7890"
                                    value={localFormData.phone || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label>GitHub</label>
                                <input
                                    type="text"
                                    name="github"
                                    placeholder="github.com/username"
                                    value={localFormData.github || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Portfolio</label>
                                <input
                                    type="text"
                                    name="portfolio"
                                    placeholder="yourportfolio.com"
                                    value={localFormData.portfolio || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label>LinkedIn</label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    placeholder="linkedin.com/in/username"
                                    value={localFormData.linkedin || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </>
                );

            case "Summary":
                return (
                    <div className="input-group g1">
                        <label>Summary</label>
                        <textarea name="summary" placeholder="Experienced software developer with 5+ years of experience in web development..." value={localFormData.summary} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
                    </div>
                );
            case "Education":
                return (
                    <>
                        {localFormData.education.map((edu, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("education", index)}>
                                    <h3>Education {index + 1}</h3>
                                    <div className="section-actions">
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveUp("education", index); }}>
                                            <FaArrowUp />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveDown("education", index); }}>
                                            <FaArrowDown />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); toggleSection("education", index); }}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete("education", index); }} style={{ color: 'red' }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                {expandedSections[`education-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Study Program</label>
                                                <input type="text" name={`education.${index}.degree`} placeholder="Bachelor of Science in Computer Science" value={edu.degree || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Institution</label>
                                                <input type="text" name={`education.${index}.school`} placeholder="University of Technology" value={edu.school || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Start Date</label>
                                                <input type="date" name={`education.${index}.startDate`} placeholder="MM/YYYY" value={edu.startDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>End Date</label>
                                                <input type="date" name={`education.${index}.endDate`} placeholder="MM/YYYY or Present" value={edu.endDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Location</label>
                                                <input type="text" name={`education.${index}.location`} placeholder="City, State/Country" value={edu.location || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>GPA</label>
                                                <input type="number" name={`education.${index}.gpa`} placeholder="3.8" value={edu.gpa || ""} onChange={handleChange} />
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
                                    <div className="section-actions">
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveUp("experience", index); }}>
                                            <FaArrowUp />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveDown("experience", index); }}>
                                            <FaArrowDown />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); toggleSection("experience", index); }}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete("experience", index); }} style={{ color: 'red' }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                {expandedSections[`experience-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Job Title</label>
                                                <input type="text" name={`experience.${index}.title`} placeholder="Software Engineer" value={exp.title || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Company</label>
                                                <input type="text" name={`experience.${index}.company`} placeholder="Tech Solutions Inc." value={exp.company || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Start Date</label>
                                                <input type="date" name={`experience.${index}.startDate`} placeholder="MM/YYYY" value={exp.startDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>End Date</label>
                                                <input type="date" name={`experience.${index}.endDate`} placeholder="MM/YYYY or Present" value={exp.endDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Location</label>
                                                <input type="text" name={`experience.${index}.location`} placeholder="City, State/Country" value={exp.location || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Description</label>
                                                <textarea name={`experience.${index}.description`} placeholder="• Developed and maintained web applications using React.js&#10;• Collaborated with cross-functional teams to deliver projects on time&#10;• Improved application performance by 30%" value={exp.description || ""} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
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
                                    <div className="section-actions">
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveUp("projects", index); }}>
                                            <FaArrowUp />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveDown("projects", index); }}>
                                            <FaArrowDown />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); toggleSection("projects", index); }}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete("projects", index); }} style={{ color: 'red' }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                {expandedSections[`projects-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Project Name</label>
                                                <input type="text" name={`projects.${index}.name`} placeholder="E-commerce Platform" value={proj.name || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Link</label>
                                                <input type="text" name={`projects.${index}.link`} placeholder="https://github.com/username/project" value={proj.link || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Description</label>
                                                <textarea name={`projects.${index}.description`} placeholder="• Built a full-stack e-commerce application using React and Node.js&#10;• Implemented secure payment processing with Stripe API&#10;• Designed responsive UI with Material-UI" value={proj.description || ""} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
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
                        <textarea name="skills" placeholder="Programming Languages: JavaScript, Python, Java&#10;Frameworks: React, Node.js, Express&#10;Tools: Git, Docker, AWS&#10;Soft Skills: Team Collaboration, Problem Solving, Communication" value={localFormData.skills} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
                    </div>
                );
            case "Certifications":
                return (
                    <>
                        {localFormData.certifications.map((cert, index) => (
                            <div key={index} className="collapsible-section">
                                <div className="section-header" onClick={() => toggleSection("certifications", index)}>
                                    <h3>Certification {index + 1}</h3>
                                    <div className="section-actions">
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveUp("certifications", index); }}>
                                            <FaArrowUp />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleMoveDown("certifications", index); }}>
                                            <FaArrowDown />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); toggleSection("certifications", index); }}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete("certifications", index); }} style={{ color: 'red' }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                {expandedSections[`certifications-${index}`] && (
                                    <div className="section-content">
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Certification Name</label>
                                                <input type="text" name={`certifications.${index}.name`} placeholder="AWS Certified Solutions Architect" value={cert.name || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Issuer</label>
                                                <input type="text" name={`certifications.${index}.issuer`} placeholder="Amazon Web Services" value={cert.issuer || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Issue Date</label>
                                                <input type="date" name={`certifications.${index}.issueDate`} placeholder="MM/YYYY" value={cert.issueDate || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Expiration Date</label>
                                                <input type="date" name={`certifications.${index}.expirationDate`} placeholder="MM/YYYY or No Expiration" value={cert.expirationDate || ""} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label>Credential ID</label>
                                                <input type="text" name={`certifications.${index}.credentialID`} placeholder="ABC123XYZ" value={cert.credentialID || ""} onChange={handleChange} />
                                            </div>
                                            <div className="input-group">
                                                <label>Credential URL</label>
                                                <input type="text" name={`certifications.${index}.credentialURL`} placeholder="https://www.credential.net/verify/123456" value={cert.credentialURL || ""} onChange={handleChange} />
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