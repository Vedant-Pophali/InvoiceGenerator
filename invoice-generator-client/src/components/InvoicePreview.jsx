import { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoiceData.js";
import { templateComponents } from "../util/InvoiceTemplates.js";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedInvoiceData = formatInvoiceData(invoiceData);
    const SelectedTemplate = templateComponents[template] || templateComponents["template1"];

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            <SelectedTemplate data={formattedInvoiceData} />
        </div>
    );
});
export default InvoicePreview;