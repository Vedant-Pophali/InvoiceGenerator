export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company = {},
        invoiceDetails:invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        items = [],
        logo = ""
    } = invoiceData || {};

    // DEBUG LOGS
    console.log("invoiceData:", invoiceData);
    console.log("invoice.date:", invoice.date);
    console.log("invoice.dueDate:", invoice.dueDate);

    const currencySymbol = "₹";
    const subtotal = items.reduce((acc, item) => acc + (item.qty * item.amount), 0);
    const taxAmount = subtotal * (tax / 100);
    const total = taxAmount + subtotal;

    return {
        title,
        companyName: company.name,
        companyAddress: company.address,
        companyPhone: company.phone,
        companyLogo: logo || company.logo,

        invoiceNumber: invoice.number || "N/A",
        invoiceDate: formatDate(invoice.date),
        paymentDate: formatDate(invoice.dueDate),

        accountName: account.name,
        bankName: account.bankName,
        accountNumber: account.accNumber,
        accountIfscCode: account.ifsccode,

        billingName: billing.name,
        billingAddress: billing.address,
        billingPhone: billing.phone,

        shippingName: shipping.name,
        shippingAddress: shipping.address,
        shippingPhone: shipping.phone,

        currencySymbol,
        tax,
        items,
        notes,
        subtotal,
        taxAmount,
        total
    };
};

export const formatDate = (dateStr) => {
    if (!dateStr) {
        console.warn("Missing date:", dateStr);
        return "N/A";
    }

    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};