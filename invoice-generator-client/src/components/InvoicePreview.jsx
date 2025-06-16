import { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoiceData.js";
import Template1 from "../templates/Template1/Template1.jsx";
import Template2 from "../templates/Template2/Template2.jsx";
import Template3 from "../templates/Template3/Template3.jsx";
import Template4 from "../templates/Template4/Template4.jsx";
import Template5 from "../templates/Template5/Template5.jsx";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedInvoiceData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref}className="invoice-preview container px-2 py-2 overflow-x-auto">
            <Template1 data={formattedInvoiceData} />
            {/*<Template2 data={formattedInvoiceData} />*/}
            {/*<Template3 data={formattedInvoiceData} />*/}
            {/*<Template4 data={formattedInvoiceData} />*/}
            {/*<Template5 data={formattedInvoiceData} />*/}
        </div>
    );
});

export default InvoicePreview;