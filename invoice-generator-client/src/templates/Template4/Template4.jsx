import './Template4.css';

const Template4 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template4-wrapper">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-start mb-5">
                <div className="d-flex flex-column align-items-start">
                    {data.companyLogo && (
                        <img
                            src={logoSrc}
                            alt="Company Logo"
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                                borderRadius: "50%",
                                border: "2px solid #f0f1f2",
                                padding: "5px"
                            }}
                        />
                    )}
                    <div className="t4-company-name t4-primary-text">{data.companyName || "Engineer Talks"}</div>
                    <div className="t4-header-info text-muted">
                        <div>{data.companyAddress || "Company Address"}</div>
                        <div>Phone: {data.companyPhone || "N/A"}</div>
                        {data.companyEmail && <div>Email: {data.companyEmail}</div>}
                    </div>
                </div>

                <div className="t4-invoice-details">
                    <div className="t4-title t4-primary-text">{data.title || "Invoice"}</div>
                    <div><span className="fw-semibold text-dark">Invoice#:</span> {data.invoiceNumber || "N/A"}</div>
                    <div><span className="fw-semibold text-dark">Invoice Date:</span> {data.invoiceDate || "N/A"}</div>
                    <div><span className="fw-semibold text-dark">Due Date:</span> {data.paymentDate || data.invoiceDueDate || "N/A"}</div>
                </div>
            </div>

            {/* Billed By & Billed To Section */}
            <div className="row g-4 mb-4">
                <div className="col-6">
                    <div className="t4-billed-box t4-light-bg">
                        <div className="t4-box-title t4-primary-text">Billed by</div>
                        <div className="fw-bold text-dark mb-1">{data.companyName || "Engineer Talks"}</div>
                        <div className="text-muted">{data.companyAddress || "Company Address"}</div>
                        <div className="text-muted mt-1">Phone: {data.companyPhone || "N/A"}</div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="t4-billed-box t4-light-bg">
                        <div className="t4-box-title t4-primary-text">Billed to</div>
                        <div className="fw-bold text-dark mb-1">{data.billingName || "Client Name"}</div>
                        <div className="text-muted">{data.billingAddress || "Client Address"}</div>
                        <div className="text-muted mt-1">Phone: {data.billingPhone || "N/A"}</div>
                    </div>
                </div>
            </div>

            {/* Items Table */}
            <table className="t4-table">
                <thead>
                    <tr>
                        <th>Item #/Item description</th>
                        <th style={{width: '10%'}}>Qty.</th>
                        <th className="text-right" style={{width: '20%'}}>Rate</th>
                        <th className="text-right" style={{width: '20%'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items?.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="fw-medium text-dark">{item.name || "Item Name"}</div>
                                {item.description && <div className="text-muted" style={{fontSize: '11px', marginTop: '2px'}}>{item.description}</div>}
                            </td>
                            <td>{item.qty || 0}</td>
                            <td className="text-right">{data.currencySymbol || "₹"}{parseFloat(item.amount || 0).toFixed(2)}</td>
                            <td className="text-right">{data.currencySymbol || "₹"}{((item.qty || 0) * (item.amount || 0)).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Totals Section */}
            <div className="t4-totals-container">
                <div className="t4-totals-box t4-light-bg">
                    <div className="t4-totals-row text-dark fw-medium">
                        <span>Sub Total</span>
                        <span>{data.currencySymbol || "₹"}{(data.subtotal || 0).toFixed(2)}</span>
                    </div>
                    {((data.tax > 0) || (data.taxAmount > 0)) && (
                        <div className="t4-totals-row text-dark fw-medium">
                            <span>Tax ({data.tax || 0}%)</span>
                            <span>{data.currencySymbol || "₹"}{(data.taxAmount || 0).toFixed(2)}</span>
                        </div>
                    )}
                    <div className="t4-totals-row t4-grand-total t4-primary-text mt-2 pt-2" style={{borderTop: '1px solid #d6d9dc'}}>
                        <span>Total</span>
                        <span>{data.currencySymbol || "₹"}{(data.total || 0).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Remarks / Notes Section */}
            <div className="t4-remarks-section">
                <div className="t4-remarks-title t4-primary-text">Remarks</div>
                <div className="text-muted">{data.notes || "Thanks for shopping with us."}</div>
            </div>
        </div>
    );
};

export default Template4;