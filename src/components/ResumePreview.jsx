import React, { useRef, useState, Suspense } from "react";
import { FaDownload, FaTimes, FaEye } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ClassicResume from "./ResumeTemplates/ClassicResume";
import ModernResume from "./ResumeTemplates/ModernResume";
import CreativeResume from "./ResumeTemplates/CreativeResume";

const templates = {
    Classic: ClassicResume,
    Modern: ModernResume,
    Creative: CreativeResume,
};

const ResumePreview = ({ formData, template }) => {
    const resumeRef = useRef();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const SelectedTemplate = templates[template] || ClassicResume;

    const handlePreview = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const handleDownload = () => {
        html2canvas(resumeRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, width, height);
            pdf.save(`${formData.fullName || "Resume"}_Resume.pdf`);
        });
    };

    return (
        <div className="resume-preview">
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>
                            <FaTimes />
                        </button>
                        <div className="resume-popup-content" ref={resumeRef}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <SelectedTemplate formData={formData} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            )}
            <div className="resume-container" ref={resumeRef}>
                <Suspense fallback={<div>Loading...</div>}>
                    <SelectedTemplate formData={formData} />
                </Suspense>
            </div>
            <div className="resume-buttons">
                <button className="action-btn" onClick={handlePreview}>
                    <span>Preview</span>
                    <FaEye className="icon" />
                </button>
                <button className="action-btn" onClick={handleDownload}>
                    <span>Download</span>
                    <FaDownload className="icon" />
                </button>
            </div>
        </div>
    );
};

export default ResumePreview;
