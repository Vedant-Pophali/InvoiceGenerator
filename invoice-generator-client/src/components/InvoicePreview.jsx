import { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoiceData.js";
import Template1 from "../templates/Template1/Template1.jsx";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedInvoiceData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref}className="invoice-preview container px-2 py-2 overflow-x-auto">
            <Template1 data={formattedInvoiceData} />
        </div>
    );
});

export default InvoicePreview;