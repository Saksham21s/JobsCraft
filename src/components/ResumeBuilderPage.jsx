import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import ResumePreview from "./ResumePreview";
import FormInput from "./FormInput";
import "../styles/App.css";
import { FaPlus } from "react-icons/fa";
import classic from "../assets/Classic.png";
import modern from "../assets/Resume.png";
import creative from "../assets/Creative.avif";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultFormData = {
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

const ResumeBuilder = () => {
    const [formData, setFormData] = useState(() => {
        try {
            const storedData = localStorage.getItem("formData");
            return storedData ? JSON.parse(storedData) : defaultFormData;
        } catch (error) {
            console.error("Failed to parse formData from localStorage", error);
            return defaultFormData;
        }
    });

    const [activeTab, setActiveTab] = useState(() => sessionStorage.getItem("activeTab") || "Contact");
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(() => localStorage.getItem("selectedTemplate") || "Classic");
    const menuRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem("selectedTemplate", selectedTemplate);
    }, [selectedTemplate]);

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
                <ResumePreview key={selectedTemplate} formData={formData} template={selectedTemplate} />
                <FormInput activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
            </div>

            <div className="fab-container" ref={menuRef}>
                <button className="fab" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaPlus />
                </button>
                {menuOpen && (
                    <div className="fab-menu">
                        {templates.map((template) => (
                            <button
                                key={template.id}
                                className={`fab-option ${selectedTemplate === template.name ? "active-fab-option" : ""}`}
                                onClick={() => setSelectedTemplate(template.name)}
                            >
                                <img src={template.preview} alt={template.name} className="template-preview" />
                                {template.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false}
                newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
                draggable pauseOnHover theme="light" />
        </div>
    );
};

export default ResumeBuilder;