import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import ResumePreview from "./ResumePreview";
import FormInput from "./FormInput";
import "../styles/App.css";
import { FaPlus } from "react-icons/fa";
import classic from "../assets/classic.avif";
import modern from "../assets/Resume.png";
import creative from "../assets/creative-resume.png";

const ResumeBuilder = () => {
    const [formData, setFormData] = useState(() => {
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

    const [activeTab, setActiveTab] = useState(() => sessionStorage.getItem("activeTab") || "Contact");
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const templates = [
        { id: 1, name: "Classic", preview: classic },
        { id: 2, name: "Modern", preview: modern },
        { id: 3, name: "Creative", preview: creative }
    ];

    return (
        <div className="resume-builder">
            <NavBar hideToggle={true} />
            <div className="main-container">
                <ResumePreview formData={formData} template={selectedTemplate} />
                <FormInput activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
            </div>

            {/* Floating Action Button */}
            <div className="fab-container" ref={menuRef}>
                <button className="fab" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaPlus />
                </button>
                {menuOpen && (
                    <div className="fab-menu">
                        {templates.map((template) => (
                            <button key={template.id} className="fab-option" onClick={() => setSelectedTemplate(template.id)}>
                                <img src={template.preview} alt={template.name} className="template-preview" />
                                {template.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeBuilder;
