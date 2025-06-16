import { useState, useContext } from "react";
import { Pencil } from "lucide-react";
import InvoiceForm from "../components/InvoiceForm.jsx";
import TemplateGrid from "../components/TemplateGrid.jsx";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const MainPage = () => {
    const [isEditingTitle, setEditingTitle] = useState(false);
    const navigate = useNavigate();
    const { invoiceData, setInvoiceData } = useContext(AppContext);

    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleTitleChange = (e) => {
        setInvoiceData((prev) => ({
            ...prev,
            title: e.target.value,
        }));
    };

    const handleTemplateClick = (templateId) => {
        if (!invoiceData.items || invoiceData.items.length === 0) {
            toast.error("Please add at least one item.");
            return;
        }

        const hasInvalidItem = invoiceData.items.some(
            (item) =>
                item.qty === "" ||
                item.amount === "" ||
                isNaN(item.qty) ||
                isNaN(item.amount)
        );

        if (hasInvalidItem) {
            toast.error("Please enter valid Quantity and Rate for all items.");
            return;
        }

        setSelectedTemplate(templateId);
        navigate("/preview");
    };

    const handleTitleBlur = () => {
        setEditingTitle(false);
    };

    return (
        <div
            className="container-fluid min-vh-100 py-4"
            style={{ background: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)' }}
        >
            <div className="container">
                {/* Title Section */}
                <div className="bg-white border rounded shadow-sm p-3 mb-4">
                    <div className="d-flex align-items-center">
                        {isEditingTitle ? (
                            <input
                                type="text"
                                className="form-control me-2"
                                autoFocus
                                onBlur={handleTitleBlur}
                                onChange={handleTitleChange}
                                value={invoiceData.title}
                            />
                        ) : (
                            <>
                                <h5 className="mb-0 me-2">{invoiceData.title}</h5>
                                <button
                                    className="btn btn-sm p-0 border-0 bg-transparent"
                                    onClick={() => setEditingTitle(true)}
                                >
                                    <Pencil className="text-primary" size={20} />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Form & Templates Section */}
                <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            <InvoiceForm />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            <TemplateGrid onTemplateClick={handleTemplateClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;