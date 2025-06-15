import { useState } from "react";
import { Pencil } from "lucide-react";
import InvoiceForm from "../components/InvoiceForm.jsx";
import TemplateGrid from "../components/TemplateGrid.jsx";

const MainPage = () => {
    const [isEditingTitle, setEditingTitle] = useState(false);
    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");

    const handleTitleChange = (e) => {
        setInvoiceTitle(e.target.value);
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
                <div className="bg-white border rounded shadow-sm p-3 mb-4">
                    <div className="d-flex align-items-center">
                        {isEditingTitle ? (
                            <input
                                type="text"
                                className="form-control me-2"
                                autoFocus
                                onBlur={handleTitleBlur}
                                onChange={handleTitleChange}
                                value={invoiceTitle}

                            />
                        ) : (
                            <>
                                <h5 className="mb-0 me-2">{invoiceTitle}</h5>
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

                <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            <InvoiceForm />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            <TemplateGrid   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;