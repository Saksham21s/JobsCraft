import React, { useState } from "react";
import NavBar from "./NavBar";
import ResumePreview from "./ResumePreview";
import FormInput from "./FormInput";
import "../styles/App.css";

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
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
    });

    const [activeTab, setActiveTab] = useState("Contact");

    return (
        <div className="resume-builder">
            <NavBar hideToggle={true} />
            <div className="main-container">
                <ResumePreview formData={formData} />
                <FormInput activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
            </div>
        </div>
    );
};

export default ResumeBuilder;