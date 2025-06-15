import {assets} from "../assets/assets.js";
import {Trash2} from "lucide-react";

const InvoiceForm = () => {
    return (
        <div className="invoiceform container py-4">
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="d-flex align-items-center gap-3">
                    <label htmlFor="image" className="form-label">
                        <img src={assets.upload_area} alt="upload" width={88} height={88} />
                    </label>
                    <input type="file" name="logo" id="image" hidden className="form-control" aspect="image/*"/>
                </div>
            </div>
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Phone"/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company Email"/>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address"/>
                    </div>
                </div>
            </div>
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
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address"/>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>
                        <input type="text" className="form-control" placeholder="Invoice Number" id="invoiceNumber" required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" id="invoiceDate" required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Invoice Due Date</label>
                        <input type="date" className="form-control" id="invoiceDueDate" required/>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h5>Item Details</h5>
                <div className="card p-3 mb-3">
                    <div className="row g-3 mb-2">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Item Name" required />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control" placeholder="Quantity" required />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control" placeholder="Amount" required />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control" placeholder="Total" required />
                        </div>
                    </div>

                    <div className="d-flex gap-2 align-items-start">
                        <textarea className="form-control" placeholder="Description" required />
                        <button className="btn btn-outline-danger mt-1" type="button">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <button className="btn btn-primary" type="button">Add Item</button>
            </div>
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
            <div className="mb-4">
                <h5>Totals</h5>
                <div className="d-flex justify-content-end">
                    <div className="w-100 w-md-50">
                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>₹{1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-2">
                            <label htmlFor="taxInput" className="mb-0">Tax Rate (%)</label>
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
                            <span>₹{1000.00}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between fw-bold mt-2">
                                <span>Grand Total</span>
                                <span>₹{1000.00}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h5>Notes</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" rows={3} />
                </div>
            </div>
        </div>
    )
}

export default InvoiceForm;