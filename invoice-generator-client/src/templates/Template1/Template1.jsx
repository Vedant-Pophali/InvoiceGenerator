import './Template1.css';

const Template1 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template1 w-800 mx-auto p-4 border black-border bg-white">
            {/* Company & Invoice Title */}
            <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="d-flex flex-column align-items-start text-start">
                    <img
                        src={logoSrc}
                        alt="Company Logo"
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            marginBottom: "10px",
                            borderRadius: "8px"
                        }}
                    />
                    <div className="company-title fw-bold">{data.companyName}</div>
                    <div style={{ fontSize: "12px", marginBottom: "6px" }}>{data.companyPhone}</div>
                    <div>{data.companyAddress}</div>
                </div>

                <div className="text-end">
                    <div className="invoice-title">{data.title}</div>
                    <div>Invoice #: {data.invoiceNumber}</div>
                    <div>Date: {data.invoiceDate}</div>
                    <div>Due: {data.paymentDate}</div>
                </div>
            </div>

            <hr />

            {/* Billing & Shipping */}
            <div className="address-section mb-4 d-flex gap-3">
                <div className="address-box col-md-6 p-3 billing-box">
                    <div className="billing-title mb-2 fw-semibold">Ship To</div>
                    <div>{data.shippingName}</div>
                    <div>{data.shippingAddress}</div>
                    <div>{data.shippingPhone}</div>
                </div>
                <div className="address-box col-md-6 p-3 billing-box">
                    <div className="billing-title mb-2 fw-semibold">Bill To</div>
                    <div>{data.billingName}</div>
                    <div>{data.billingAddress}</div>
                    <div>{data.billingPhone}</div>
                </div>
            </div>

            <hr />

            {/* Items Table */}
            <table className="table table-bordered text-center black-border template1-table">
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
                        <td>{data.currencySymbol}{item.qty * item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <hr />

            {/* Totals */}
            <div className="bank-box totals-box">
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
            <div className="bank-box billing-box">
                <div className="billing-title mb-2 fw-semibold">Bank Details</div>
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
    );
};

export default Template1;