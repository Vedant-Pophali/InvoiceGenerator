import { assets } from "../assets/assets.js";
import { Trash2 } from "lucide-react";
import {useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext.jsx";
import { toast } from "react-hot-toast";

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

    const handleChange = (section, field, value) => {
        setInvoiceData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    useEffect(() => {
        if (!invoiceData.invoice.number) {
            const randomNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
            setInvoiceData(prev => ({
                ...prev,
                invoice: {
                    ...prev.invoice,
                    number: randomNumber
                }
            }));
        }
    }, []);

    const handleSameAsBilling = (e) => {
        const isChecked = e.target.checked;
        setInvoiceData(prev => ({
            ...prev,
            shipping: isChecked
                ? { ...prev.billing }
                : { name: "", phone: "", address: "" }
        }));
    };
    const subtotal = invoiceData.items.reduce(
        (sum, item) => sum + Number(item.qty) * Number(item.amount),
        0
    );
    const taxAmount = (Number(invoiceData.tax) / 100) * subtotal;
    const grandTotal = subtotal + taxAmount;

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setInvoiceData(prev => ({
                    ...prev,
                    logo: reader.result
                }))
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className="invoiceform container py-4">
            {/* Company Logo */}
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="image" className="form-label">
                        <img src={invoiceData.logo ? invoiceData.log :assets.upload_area}
                             alt="upload"
                             width={88}
                             height={88}
                        />
                    </label>
                    <input type="file"
                           id="image"
                           hidden
                           accept="image/*"
                           onChange={handleLogoUpload}/>
                </div>
            </div>

            {/* Company Info */}
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company Name"
                            onChange={(e) => handleChange("company", "name", e.target.value)}
                            value={invoiceData.company.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company Phone"
                            onChange={(e) => handleChange("company", "phone", e.target.value)}
                            value={invoiceData.company.phone}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Company Email"
                            onChange={(e) => handleChange("company", "email", e.target.value)}
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Client Name"
                            value={invoiceData.billing.name}
                            onChange={(e) => handleChange("billing", "name", e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Client Phone"
                            value={invoiceData.billing.phone}
                            onChange={(e) => handleChange("billing", "phone", e.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Client Address"
                            value={invoiceData.billing.address}
                            onChange={(e) => handleChange("billing", "address", e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Ship To */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>Ship To</h5>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="sameAsBilling"
                            onChange={handleSameAsBilling}
                        />
                        <label className="form-check-label" htmlFor="sameAsBilling">
                            Same as Billing Address
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Receiver Name"
                            value={invoiceData.shipping.name}
                            onChange={(e) => handleChange("shipping", "name", e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Receiver Phone"
                            value={invoiceData.shipping.phone}
                            onChange={(e) => handleChange("shipping", "phone", e.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Shipping Address"
                            value={invoiceData.shipping.address}
                            onChange={(e) => handleChange("shipping", "address", e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Invoice Info */}
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="invoiceNumber"
                            value={invoiceData.invoice.number}
                            onChange={(e) => handleChange("invoice", "number", e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="invoiceDate"
                            value={invoiceData.invoice.date}
                            onChange={(e) => handleChange("invoice", "date", e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="invoiceDueDate"
                            value={invoiceData.invoice.dueDate}
                            onChange={(e) => handleChange("invoice", "dueDate", e.target.value)}
                            required
                        />
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
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Item Name"
                                    value={item.name}
                                    onChange={(e) => {
                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].name = e.target.value;
                                        setInvoiceData(prev => ({ ...prev, items: updatedItems }));
                                    }}
                                />
                            </div>

                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantity"
                                    value={item.qty}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value <= 0) {
                                            toast.error("Quantity must be greater than 0");
                                            return;
                                        }

                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].qty = value;
                                        updatedItems[index].total = value * updatedItems[index].amount;
                                        setInvoiceData(prev => ({ ...prev, items: updatedItems }));
                                    }}
                                />
                            </div>

                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Rate"
                                    value={item.amount}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value < 0) {
                                            toast.error("Rate cannot be negative");
                                            return;
                                        }

                                        const updatedItems = [...invoiceData.items];
                                        updatedItems[index].amount = value;
                                        updatedItems[index].total = updatedItems[index].qty * value;
                                        setInvoiceData(prev => ({ ...prev, items: updatedItems }));
                                    }}
                                />
                            </div>

                            <div className="col-md-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Total"
                                    value={item.total}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-2 align-items-start">
        <textarea
            className="form-control"
            placeholder="Description"
            value={item.description}
            onChange={(e) => {
                const updatedItems = [...invoiceData.items];
                updatedItems[index].description = e.target.value;
                setInvoiceData(prev => ({ ...prev, items: updatedItems }));
            }}
        />
                            {invoiceData.items.length > 1 && (
                                <button
                                    className="btn btn-outline-danger mt-1"
                                    type="button"
                                    onClick={() => deleteItem(index)}
                                >
                                    Delete <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary" type="button" onClick={addItem}>
                    Add Item
                </button>
            </div>

            {/* Bank Details */}
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="card p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Account Holder Name"
                                value={invoiceData.account.name}
                                onChange={(e) => handleChange("account", "name", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Bank Name"
                                value={invoiceData.account.bankName}
                                onChange={(e) => handleChange("account", "bankName", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Account Number"
                                value={invoiceData.account.accNumber}
                                onChange={(e) => handleChange("account", "accNumber", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="IFSC Code"
                                value={invoiceData.account.ifsccode}
                                onChange={(e) => handleChange("account", "ifsccode", e.target.value)}
                            />
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
                            <span>
                                ₹{invoiceData.items.reduce((sum, item) => sum + Number(item.total || 0), 0).toFixed(2)}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="taxInput" className="mb-0">Tax Rate</label>
                            <div className="input-group" style={{ width: "100px" }}>
                                <input
                                    type="number"
                                    className="form-control text-end"
                                    id="taxInput"
                                    value={invoiceData.tax}
                                    onChange={(e) => {
                                        const value = Math.max(0, Number(e.target.value));
                                        setInvoiceData(prev => ({ ...prev, tax: value }));
                                    }}
                                    min="0"
                                    required/>
                                <span className="input-group-text px-2">%</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Tax Amount</span>
                            <span>
                                ₹{(
                                (invoiceData.tax / 100) *
                                invoiceData.items.reduce((sum, item) => sum + Number(item.total || 0), 0)
                            ).toFixed(2)}
                            </span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold mt-2">
                            <span>Grand Total</span>
                            <span>
                                ₹{(
                                invoiceData.items.reduce((sum, item) => sum + Number(item.total || 0), 0) +
                                ((invoiceData.tax / 100) *
                                    invoiceData.items.reduce((sum, item) => sum + Number(item.total || 0), 0))
                            ).toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes */}
            <div className="mb-4">
                <h5>Notes</h5>
                <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Additional information or terms..."
                    value={invoiceData.notes}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}
                />
            </div>
        </div>
    );
};

export default InvoiceForm;