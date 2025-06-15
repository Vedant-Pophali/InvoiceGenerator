import { assets } from "../assets/assets.js";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import {AppContext, initialInvoiceData as prev} from "../context/AppContext.jsx";

const InvoiceForm = () => {
    const { invoiceData, setInvoiceData } = useContext(AppContext);
    const addItem = () => {
        setInvoiceData(prev => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    name: "",
                    qty: "",
                    amount: "",
                    description: "",
                    total: 0
                }
            ]
        }));
    };
    const deleteItem = (indexToRemove) => {
        setInvoiceData(prev => ({
            ...prev,
            items: prev.items.filter((_, index) => index !== indexToRemove)
        }));
    };
const handleChange = (section, field,value) => {
    setInvoiceData(prev => ({
        ...prev,
        [section]: {
            ...prev[section],
            [field]: value
        }
    }));
}
    return (
        <div className="invoiceform container py-4">
            {/* Company Logo */}
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="image" className="form-label">
                        <img src={assets.upload_area} alt="upload" width={88} height={88} />
                    </label>
                    <input type="file" id="image" hidden accept="image/*" />
                </div>
            </div>

            {/* Company Info */}
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text"
                        className="form-control" placeholder="Company Name"
                        onChange={(e) => handleChange("company","name",e.target.value)}
                        value={invoiceData.company.name} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Phone"
                               onChange={(e) => handleChange("company","phone",e.target.value)}
                               value={invoiceData.company.phone}/>
                    </div>
                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Company Email"
                                   onChange={(e) => handleChange("company","email",e.target.value)}
                                    value={invoiceData.company.email}
                                   />
                    </div>
                </div>
            </div>

            {/* Bill To */}
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Client Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Client Phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Client Address" />
                    </div>
                </div>
            </div>

            {/* Ship To */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>Ship To</h5>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="sameAsBilling" />
                        <label className="form-check-label" htmlFor="sameAsBilling">
                            Same as Billing Address
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Receiver Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Receiver Phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address" />
                    </div>
                </div>
            </div>

            {/* Invoice Info */}
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text" className="form-control" id="invoiceNumber" placeholder="INV-001" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" id="invoiceDate" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Due Date</label>
                        <input type="date" className="form-control" id="invoiceDueDate" required />
                    </div>
                </div>
            </div>

            {/* Item Details */}
            <div className="mb-4">
                <h5>Item Details</h5>
                {invoiceData.items.map((item, index) => (
                    <div className="card p-3 mb-3" key={index}>
                        <div className="row g-3 mb-2">
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Item Name" required />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Quantity" required />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Rate" required />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Total" required />
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-start">
                            <textarea className="form-control" placeholder="Description" required />
                            {invoiceData.items.length > 1 && (
                                <button className="btn btn-outline-danger mt-1" type="button" onClick={()=>deleteItem(index)}>Delete
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary" type="button" onClick={addItem}>Add Item</button>
            </div>
            {/* Bank Details */}
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="card p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Account Holder Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Bank Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Account Number" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="IFSC Code" required />
                        </div>
                    </div>
                </div>
            </div>

            {/* Totals */}
            <div className="mb-4">
                <h5>Totals</h5>
                <div className="d-flex justify-content-end">
                    <div className="w-100 w-md-50">
                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>₹{1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="taxInput" className="mb-0">Tax Rate</label>
                            <div className="input-group" style={{ width: "100px" }}>
                                <input
                                    type="number"
                                    className="form-control text-end"
                                    id="taxInput"
                                    placeholder="2"
                                    required
                                />
                                <span className="input-group-text px-2">%</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax Amount</span>
                            <span>₹{20.00}</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold mt-2">
                            <span>Grand Total</span>
                            <span>₹{1020.00}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
                <h5>Notes</h5>
                <textarea className="form-control" rows={3} placeholder="Additional information or terms..." />
            </div>
        </div>
    );
};
export default InvoiceForm;