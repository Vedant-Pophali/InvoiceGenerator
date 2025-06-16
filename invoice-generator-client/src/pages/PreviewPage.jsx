import { useRef, useContext } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import InvoicePreview from "../components/InvoicePreview.jsx";

const PreviewPage = () => {
    const { selectedTemplate, invoiceData } = useContext(AppContext); // Correctly used

    return (
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
            {/* Action buttons */}
            <div className="d-flex flex-column align-items-center m-4 gap-3">

                {/* List of template buttons */}
                <div className="d-flex gap-2 flex-wrap justify-content-center">
                    {templates.map(({ id, label }) => (
                        <button
                            key={id}
                            style={{minWidth:"100px",height:"50px"}}
                            className={`btn btn-sm rounded-pill p-2 ${
                                selectedTemplate === id ? 'btn-warning' : 'btn-outline-secondary'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                {/* Action buttons like download/print */}
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <button className="btn btn-success px-4 justify-content-center">
                        Save & Exit
                    </button>
                    <button className="btn btn-danger px-4">
                        Delete Invoice
                    </button>
                    <button className="btn btn-secondary px-4">
                        Back to Dashboard
                    </button>
                    <button className="btn btn-info text-white px-4">
                        Send Email
                    </button>
                    <button className="btn btn-primary px-4 justify-content-center">
                        Download PDF
                    </button>
                </div>
            </div>

            {/*Display Invoice Preview*/}
            <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start py-3">
                <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
            </div>
        </div>
    );
};

export default PreviewPage;