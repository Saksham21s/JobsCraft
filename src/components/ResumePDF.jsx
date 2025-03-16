import { useEffect, useRef, useMemo } from "react";
import ResumePreview from "./ResumePreview";
import { usePDF } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload, FaEye } from "react-icons/fa6";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ResumePDF = ({ resumeData }) => {  
  const parentRef = useRef(null);
  const document = useMemo(() => <ResumePreview formData={resumeData} />, [resumeData]);

  const [instance, updateInstance] = usePDF({ document });

  useEffect(() => {
    if (resumeData?.saved) updateInstance(document);
  }, [resumeData?.saved, updateInstance, document]);

  const preview = (url) => {
    window.open(
      url,
      "Resume Preview",
      `toolbar=no, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, resizable=no, width=600, height=800, left=${window.innerWidth / 2 - 300}, top=100`
    );
  };

  return (
    <div ref={parentRef} className="resume-pdf-container">
      {instance.loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Document file={instance.url} loading="Loading...">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading="Loading..."
            width={parentRef.current?.clientWidth}
          />
        </Document>
      )}

      {!instance.loading && (
        <div className="resume-actions">
          <button onClick={() => preview(instance.url)} className="preview-btn">
            <span>Preview</span>
            <FaEye />
          </button>
          <a href={instance.url} download={`${resumeData?.contact?.name || "resume"}.pdf`} className="download-btn">
            <span>Download</span>
            <FaDownload />
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumePDF;
