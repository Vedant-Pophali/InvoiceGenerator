import './Template3.css';

const Template3 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template3 w-800 mx-auto p-4 border black-border bg-white">

            {/* Centered Logo & Company Info */}
            <div className="text-center mb-3">
                <img
                    src={logoSrc}
                    alt="Company Logo"
                    style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "10px"
                    }}
                />
                <div className="company-title fw-bold">{data.companyName}</div>
                <div style={{ fontSize: "12px", marginBottom: "4px" }}>{data.companyPhone}</div>
                <div>{data.companyAddress}</div>
            </div>

            {/* Invoice Info - Left Aligned */}
            <div className="text-start mb-4">
                <div className="invoice-title">{data.title}</div>
                <div>Invoice #: {data.invoiceNumber}</div>
                <div>Date: {data.invoiceDate}</div>
                <div>Due: {data.paymentDate}</div>
            </div>

            <hr />

            {/* Address Section - Vertical */}
            <div className="address-section mb-4 d-flex flex-column gap-3">
                <div className="address-box p-3" style={{ backgroundColor: "#e7f0fd", borderRadius: "8px" }}>
                    <div className="billing-title mb-2 fw-semibold">Bill To</div>
                    <div>{data.billingName}</div>
                    <div>{data.billingAddress}</div>
                    <div>{data.billingPhone}</div>
                </div>
                <div className="address-box p-3" style={{ backgroundColor: "#e7f0fd", borderRadius: "8px" }}>
                    <div className="billing-title mb-2 fw-semibold">Ship To</div>
                    <div>{data.shippingName}</div>
                    <div>{data.shippingAddress}</div>
                    <div>{data.shippingPhone}</div>
                </div>
            </div>

            <hr />

            {/* Totals & Bank Info in Row */}
            <div className="d-flex justify-content-between gap-3 mb-4">
                <div className="bank-box p-3" style={{ backgroundColor: "#e7f0fd", borderRadius: "8px", width: "50%" }}>
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

                <div className="bank-box p-3" style={{ backgroundColor: "#e7f0fd", borderRadius: "8px", width: "50%" }}>
                    <div className="billing-title mb-2 fw-semibold">Bank Details</div>
                    <div>Account Name: {data.accountName}</div>
                    <div>Bank Name: {data.bankName}</div>
                    <div>Account Number: {data.accountNumber}</div>
                    <div>IFSC Code: {data.accountIfscCode}</div>
                </div>
            </div>

            {/* Table Below */}
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

export default Template3;