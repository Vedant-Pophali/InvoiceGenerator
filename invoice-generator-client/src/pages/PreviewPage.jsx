import { useContext, useRef, useState } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import InvoicePreview from "../components/InvoicePreview.jsx";
import { saveInvoice } from "../service/InvoiceService.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PreviewPage = () => {
    const previewRef = useRef();
    const { selectedTemplate, setSelectedTemplate, invoiceData, baseUrl } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveAndExit = async () => {
        try {
            setLoading(true);
            const payload = {
                ...invoiceData,
                template: selectedTemplate,
            };
            const response = await saveInvoice(baseUrl, payload);
            if (response.status === 200) {
                toast.success("Successfully Saved the Invoice");
                navigate("/dashboard");
            } else {
                toast.error("Save failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Save failed", err.message);
        } finally {
            setLoading(false);
        }
    };

    const templateColors = {
        template1: "#fd7e14", // Orange
        template2: "#6f42c1", // Purple
        template3: "#4169e1", // Royal Blue
        template4: "#343a40", // Dark Grey
        template5: "#228B22"  // Leaf Green
    };

    // 🔢 Auto calculation of totals
    const subtotal = invoiceData.items.reduce((sum, item) => {
        const qty = parseFloat(item.qty) || 0;
        const amt = parseFloat(item.amount) || 0;
        return sum + qty * amt;
    }, 0);

    const taxRate = parseFloat(invoiceData.tax) || 0;
    const taxTotal = (subtotal * taxRate) / 100;
    const grandTotal = subtotal + taxTotal;

    return (
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
            {/* Template selector buttons */}
            <div className="d-flex flex-column align-items-center m-4 gap-3">
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
                    <button className="btn btn-success px-4" onClick={handleSaveAndExit} disabled={loading}>
                        {loading && <Loader2 className="me-2 spin-animation" size={18} />}
                        {loading ? "Saving..." : "Save & Exit"}
                    </button>
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

            {/* Total Summary */}
            <div className="text-end mt-3 px-5">
                <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
                <p><strong>Tax ({taxRate}%):</strong> ₹{taxTotal.toFixed(2)}</p>
                <p><strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default PreviewPage;