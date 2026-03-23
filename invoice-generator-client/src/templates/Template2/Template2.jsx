import './Template2.css';

const Template2 = ({ data }) => {
    const logoSrc = data.companyLogo?.startsWith("data:")
        ? data.companyLogo
        : data.companyLogo || "https://via.placeholder.com/150";

    return (
        <div className="template2-wrapper">
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
                                border: "2px solid #f3ebf6",
                                padding: "5px"
                            }}
                        />
                    )}
                    <div className="t2-company-name t2-primary-text">{data.companyName || "Engineer Talks"}</div>
                    <div className="t2-header-info text-muted">
                        <div>{data.companyAddress || "Company Address"}</div>
                        <div>Phone: {data.companyPhone || "N/A"}</div>
                        {data.companyEmail && <div>Email: {data.companyEmail}</div>}
                    </div>
                </div>

                <div className="t2-invoice-details">
                    <div className="t2-title t2-primary-text">{data.title || "Invoice"}</div>
                    <div><span className="fw-semibold text-dark">Invoice#:</span> {data.invoiceNumber || "N/A"}</div>
                    <div><span className="fw-semibold text-dark">Invoice Date:</span> {data.invoiceDate || "N/A"}</div>
                    <div><span className="fw-semibold text-dark">Due Date:</span> {data.paymentDate || data.invoiceDueDate || "N/A"}</div>
                </div>
            </div>

            {/* Billed By & Billed To Section */}
            <div className="row g-4 mb-4">
                <div className="col-6">
                    <div className="t2-billed-box t2-light-bg">
                        <div className="t2-box-title t2-primary-text">Billed by</div>
                        <div className="fw-bold text-dark mb-1">{data.companyName || "Engineer Talks"}</div>
                        <div className="text-muted">{data.companyAddress || "Company Address"}</div>
                        <div className="text-muted mt-1">Phone: {data.companyPhone || "N/A"}</div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="t2-billed-box t2-light-bg">
                        <div className="t2-box-title t2-primary-text">Billed to</div>
                        <div className="fw-bold text-dark mb-1">{data.billingName || "Client Name"}</div>
                        <div className="text-muted">{data.billingAddress || "Client Address"}</div>
                        <div className="text-muted mt-1">Phone: {data.billingPhone || "N/A"}</div>
                    </div>
                </div>
            </div>

            {/* Items Table */}
            <table className="t2-table">
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
            <div className="t2-totals-container">
                <div className="t2-totals-box t2-light-bg">
                    <div className="t2-totals-row text-dark fw-medium">
                        <span>Sub Total</span>
                        <span>{data.currencySymbol || "₹"}{(data.subtotal || 0).toFixed(2)}</span>
                    </div>
                    {((data.tax > 0) || (data.taxAmount > 0)) && (
                        <div className="t2-totals-row text-dark fw-medium">
                            <span>Tax ({data.tax || 0}%)</span>
                            <span>{data.currencySymbol || "₹"}{(data.taxAmount || 0).toFixed(2)}</span>
                        </div>
                    )}
                    <div className="t2-totals-row t2-grand-total t2-primary-text mt-2 pt-2" style={{borderTop: '1px solid #e1d4e6'}}>
                        <span>Total</span>
                        <span>{data.currencySymbol || "₹"}{(data.total || 0).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Remarks / Notes Section */}
            <div className="t2-remarks-section">
                <div className="t2-remarks-title t2-primary-text">Remarks</div>
                <div className="text-muted">{data.notes || "Thanks for shopping with us."}</div>
            </div>
        </div>
    );
};

export default Template2;