import './Template1.css';

const Template1 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template1 w-800 mx-auto d-flex border black-border bg-white">
            {/* Orange Sidebar */}
            <div style={{
                backgroundColor: "#fff3e0",
                padding: "20px",
                width: "220px",
                borderRight: "2px solid #ffa726",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <img
                    src={logoSrc}
                    alt="Company Logo"
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        border: "2px solid #ffa726"
                    }}
                />
                <div className="company-title fw-bold text-center">{data.companyName}</div>
                <div className="text-center" style={{ fontSize: "12px", marginTop: "6px" }}>{data.companyPhone}</div>
                <div className="text-center" style={{ fontSize: "12px" }}>{data.companyAddress}</div>
            </div>

            {/* Content */}
            <div className="flex-grow-1 p-4">
                {/* Invoice Title */}
                <div className="text-end mb-4" style={{ color: "#333" }}>
                    <div className="invoice-title fs-4 fw-bold">{data.title || "Invoice"}</div>
                    <div>Invoice #: {data.invoiceNumber || "N/A"}</div>
                    <div>Date: {data.invoiceDate || "N/A"}</div>
                    <div>Due: {data.paymentDate || "N/A"}</div>
                </div>

                {/* Billing & Shipping */}
                <div className="d-flex gap-3 mb-4">
                    <div className="flex-fill p-3" style={{ backgroundColor: "#fff8e1", borderRadius: "8px" }}>
                        <div className="fw-semibold mb-2">Bill To</div>
                        <div>{data.billingName}</div>
                        <div>{data.billingAddress}</div>
                        <div>{data.billingPhone}</div>
                    </div>
                    <div className="flex-fill p-3" style={{ backgroundColor: "#fff8e1", borderRadius: "8px" }}>
                        <div className="fw-semibold mb-2">Ship To</div>
                        <div>{data.shippingName}</div>
                        <div>{data.shippingAddress}</div>
                        <div>{data.shippingPhone}</div>
                    </div>
                </div>

                {/* Items Table */}
                <table className="table table-bordered text-center black-border template1-table">
                    <thead>
                    <tr className="table-warning">
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

                {/* Totals */}
                <div className="p-3 mt-3" style={{ backgroundColor: "#fff3e0", borderRadius: "10px", maxWidth: "300px", marginLeft: "auto" }}>
                    <div className="d-flex justify-content-between">
                        <div>Subtotal</div>
                        <div>{data.currencySymbol}{data.subtotal.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Tax ({data.tax}%)</div>
                        <div>{data.currencySymbol}{data.taxAmount.toFixed(2)}</div>
                    </div>
                    <div className="d-flex justify-content-between fw-bold">
                        <div>Total</div>
                        <div>{data.currencySymbol}{data.total.toFixed(2)}</div>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="p-3 mt-4" style={{ backgroundColor: "#fff8e1", borderRadius: "8px" }}>
                    <div className="fw-semibold mb-2">Bank Details</div>
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

export default Template1;