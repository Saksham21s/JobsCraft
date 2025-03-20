import React, { useState, Suspense } from "react";
import { FaDownload, FaTimes, FaEye } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ClassicResume from "../components/ResumeTemplates/ClassicResume";
import ModernResume from "../components/ResumeTemplates/ModernResume";
import CreativeResume from "../components/ResumeTemplates/CreativeResume";
import ClassicResumePDF from "../components/ResumeTemplates/ClassicResumePDF";
import ModernResumePDF from "../components/ResumeTemplates/ModernResumePDF";
import CreativeResumePDF from "../components/ResumeTemplates/CreativeResumePDF";

const templates = {
    Classic: { preview: ClassicResume, pdf: ClassicResumePDF },
    Modern: { preview: ModernResume, pdf: ModernResumePDF },
    Creative: { preview: CreativeResume, pdf: CreativeResumePDF },
};

const ResumePreview = ({ formData, template }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const SelectedTemplate = templates[template]?.preview || ClassicResume;
    const SelectedPDFTemplate = templates[template]?.pdf || ClassicResumePDF;

    const handlePreview = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="resume-preview">
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>
                            <FaTimes />
                        </button>
                        <div className="resume-popup-content">
                            <Suspense fallback={<div>Loading...</div>}>
                                <SelectedTemplate formData={formData} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            )}

            <div className="resume-container">
                <Suspense fallback={<div>Loading...</div>}>
                    <SelectedTemplate formData={formData} />
                </Suspense>
            </div>

            <div className="resume-buttons">
                <button className="action-btn" onClick={handlePreview}>
                    <span>Preview</span>
                    <FaEye className="icon" />
                </button>

                <PDFDownloadLink
                    document={<SelectedPDFTemplate formData={formData} />}
                    fileName={`${formData.fullName || "Resume"}_Resume.pdf`}
                >
                    {({ loading }) => (
                        <button className="action-btn">
                            <span>{loading ? "Generating..." : "Download PDF"}</span>
                            <FaDownload className="icon" />
                        </button>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default ResumePreview;
