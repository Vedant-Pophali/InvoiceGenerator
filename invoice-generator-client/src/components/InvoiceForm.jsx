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
                <div className="card p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Subtotal</label>
                            <span className="form-control bg-light">₹ 5000</span>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tax (18%)</label>
                            <span className="form-control bg-light">₹ 900</span>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Discount</label>
                            <span className="form-control bg-light">₹ 200</span>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Grand Total</label>
                            <span className="form-control bg-light fw-bold">₹ 5700</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4"></div>
        </div>
    )
}

export default InvoiceForm;