import './Template6.css';

const Template6 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template6 w-800 mx-auto border bg-white d-flex">
            {/* Sidebar */}
            <div className="sidebar">
                <img src={logoSrc} alt="Company Logo" />
                <div className="company-title">{data.companyName}</div>
                <div>{data.companyPhone}</div>
                <div>{data.companyAddress}</div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Invoice Title */}
                <div className="text-end mb-4">
                    <div className="invoice-title">{data.title || "Invoice"}</div>
                    <div>Invoice #: {data.invoiceNumber || "N/A"}</div>
                    <div>Date: {data.invoiceDate || "N/A"}</div>
                    <div>Due: {data.paymentDate || "N/A"}</div>
                </div>

                <hr />

                {/* Billing & Shipping */}
                <div className="address-section mb-4">
                    <div className="address-box">
                        <div className="billing-title mb-2">Ship To</div>
                        <div>{data.shippingName}</div>
                        <div>{data.shippingAddress}</div>
                        <div>{data.shippingPhone}</div>
                    </div>
                    <div className="address-box">
                        <div className="billing-title mb-2">Bill To</div>
                        <div>{data.billingName}</div>
                        <div>{data.billingAddress}</div>
                        <div>{data.billingPhone}</div>
                    </div>
                </div>

                <hr />

                {/* Items Table */}
                <table className="table table-bordered text-center template6-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{data.currencySymbol}{item.amount}</td>
                            <td>{data.currencySymbol}{(item.qty * item.amount).toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <hr />

                {/* Totals */}
                <div className="totals-box">
                    <div className="d-flex justify-content-between">
                        <div>Subtotal</div>
                        <div>{data.currencySymbol}{data.subtotal.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Tax ({data.tax}%)</div>
                        <div>{data.currencySymbol}{data.taxAmount.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between total-highlight fw-bold">
                        <div>Total</div>
                        <div>{data.currencySymbol}{data.total.toFixed(2)}</div>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="bank-box">
                    <div className="billing-title mb-2">Bank Details</div>
                    <div>Account Name: {data.accountName}</div>
                    <div>Bank Name: {data.bankName}</div>
                    <div>Account Number: {data.accountNumber}</div>
                    <div>IFSC Code: {data.accountIfscCode}</div>
                </div>

                {/* Notes */}
                {data.notes && (
                    <div className="mt-4">
                        <strong>Notes:</strong>
                        <p>{data.notes}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Template6;