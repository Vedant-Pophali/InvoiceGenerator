import './Template5.css';

const Template5 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template5 w-800 mx-auto p-4 border black-border bg-white">
            {/* Logo and Company Info - Top Center */}
            <div className="text-center mb-3">
                <img
                    src={logoSrc}
                    alt="Company Logo"
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "10px"
                    }}
                />
                <div className="company-title fw-bold">{data.companyName}</div>
                <div style={{ fontSize: "12px", marginBottom: "6px" }}>{data.companyPhone}</div>
                <div>{data.companyAddress}</div>
            </div>

            {/* Invoice Info - Centered */}
            <div className="text-center mb-4">
                <div className="invoice-title fs-4 fw-bold">{data.title}</div>
                <div>Invoice #: {data.invoiceNumber}</div>
                <div>Date: {data.invoiceDate}</div>
                <div>Due: {data.paymentDate}</div>
            </div>

            <hr />

            {/* Billing & Shipping - Vertical Stack */}
            <div className="d-flex flex-column gap-3 mb-4">
                <div className="address-box p-3" style={{ backgroundColor: "#e8f5e9", borderRadius: "8px" }}>
                    <div className="billing-title mb-2 fw-semibold">Bill To</div>
                    <div>{data.billingName}</div>
                    <div>{data.billingAddress}</div>
                    <div>{data.billingPhone}</div>
                </div>
                <div className="address-box p-3" style={{ backgroundColor: "#e8f5e9", borderRadius: "8px" }}>
                    <div className="billing-title mb-2 fw-semibold">Ship To</div>
                    <div>{data.shippingName}</div>
                    <div>{data.shippingAddress}</div>
                    <div>{data.shippingPhone}</div>
                </div>
            </div>

            <hr />

            {/* Items Table */}
            <table className="table table-bordered text-center black-border">
                <thead className="custom-header">
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
                        <td>{data.currencySymbol}{item.qty * item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <hr />

            {/* Totals + Bank Side by Side */}
            <div className="d-flex flex-wrap gap-3 mt-4">
                <div
                    className="bank-box p-3"
                    style={{ backgroundColor: "#e8f5e9", borderRadius: "8px", flex: 1, minWidth: "250px" }}
                >
                    <div className="billing-title mb-2 fw-semibold">Bank Details</div>
                    <div>Account Name: {data.accountName}</div>
                    <div>Bank Name: {data.bankName}</div>
                    <div>Account Number: {data.accountNumber}</div>
                    <div>IFSC Code: {data.accountIfscCode}</div>
                </div>

                <div
                    className="bank-box p-3"
                    style={{ backgroundColor: "#e8f5e9", borderRadius: "8px", flex: 1, minWidth: "250px" }}
                >
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
            </div>

            {/* Notes */}
            {data.notes && (
                <div className="mt-4">
                    <strong>Notes:</strong>
                    <p>{data.notes}</p>
                </div>
            )}
        </div>
    );
};

export default Template5;