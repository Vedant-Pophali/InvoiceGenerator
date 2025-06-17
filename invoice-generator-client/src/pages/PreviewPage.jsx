import { useContext } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import InvoicePreview from "../components/InvoicePreview.jsx";

const PreviewPage = () => {
    const { selectedTemplate, setSelectedTemplate, invoiceData } = useContext(AppContext);

    const templateColors = {
        template1: "#fd7e14", // Orange
        template2: "#6f42c1", // Purple
        template3: "#4169e1", // Royal Blue
        template4: "#343a40", // Dark Grey
        template5: "#228B22"  // Leaf Green
    };

    return (
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
            {/* Action buttons */}
            <div className="d-flex flex-column align-items-center m-4 gap-3">
                {/* Template selector buttons */}
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    {templates.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setSelectedTemplate(id)}
                            style={{
                                minWidth: "100px",
                                height: "50px",
                                backgroundColor: templateColors[id],
                                color: "white",
                                border: "none",
                                borderRadius: "25px"
                            }}
                            className={`btn btn-sm p-2 ${selectedTemplate === id ? 'fw-bold' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Action buttons like Save, Delete, etc. */}
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <button className="btn btn-success px-4">Save & Exit</button>
                    <button className="btn btn-danger px-4">Delete Invoice</button>
                    <button className="btn btn-secondary px-4">Back to Dashboard</button>
                    <button className="btn btn-info text-white px-4">Send Email</button>
                    <button className="btn btn-primary px-4">Download PDF</button>
                </div>
            </div>

            {/* Invoice Preview */}
            <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start py-3">
                <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
            </div>
        </div>
    );
};

export default PreviewPage;