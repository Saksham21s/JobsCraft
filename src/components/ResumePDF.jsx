import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Resume.css";
import { FaDownload, FaTimes, FaEye } from "react-icons/fa";
import ResumePreview from "./ResumePreview";

const ResumePDF = ({ formData }) => {
    const resumeRef = useRef(null);

<ResumePreview formData={resumeData} resumeRef={resumeRef} />

    const [isPopupOpen, setIsPopupOpen] = useState(false); 
    const [resumeData, setResumeData] = useState(formData || {}); 
    useEffect(() => {
        if (!formData) {
            const storedData = localStorage.getItem("formData");
            if (storedData) {
                setResumeData(JSON.parse(storedData));
            }
        } else {
            setResumeData(formData);
        }
    }, [formData]);

    // 📌 Function to Download PDF
    const handleDownload = async (e) => {
        e.preventDefault();
        e.currentTarget.classList.add("clicked"); 
        setTimeout(() => e.currentTarget.classList.remove("clicked"), 500);
    
        const resumeElement = resumeRef.current;
        if (!resumeElement) {
            console.error("Resume element not found!");
            return;
        }
    
        try {
            const scale = window.devicePixelRatio || 2;
    
            const canvas = await html2canvas(resumeElement, {
                scale: scale,
                useCORS: true, 
                allowTaint: true,
                backgroundColor: null,
                foreignObjectRendering: true, 
            });
    
            // Convert canvas to image
            const imgData = canvas.toDataURL("image/png", 1.0);
    
            // Create PDF
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });
    
            // Calculate PDF dimensions
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; 
    
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    
            // Save the PDF
            const fileName = `${resumeData.fullName || "Resume"}_Resume.pdf`;
            pdf.save(fileName);
    
            console.log("PDF downloaded successfully!");
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };
    

    // 📌 Function to Preview in Popup
    const handlePreview = () => {
        setIsPopupOpen(true);
    };

    return (
        <div className="relative w-full md:max-w-[24rem] 2xl:max-w-[28rem]">
            {/* 📌 Resume Preview */}
            <div ref={resumeRef} className="bg-white p-4 rounded-md shadow-lg">
                <ResumePreview formData={resumeData} />
            </div>

            {/* 📌 Action Buttons */}
            <div className="mt-4 flex justify-around">
                <button onClick={handlePreview} className="btn text-sm">
                    <span>Preview</span>
                    <FaEye />
                </button>
                <button onClick={handleDownload} className="btn text-sm">
                    <span>Download</span>
                    <FaDownload />
                </button>
            </div>

            {/* 📌 Popup Modal for Full Screen Preview */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
                            <FaTimes />
                        </button>
                        <div className="resume-popup">
                            <ResumePreview formData={resumeData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumePDF;