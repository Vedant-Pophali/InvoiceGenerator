 export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company={},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        items = [],
        logo = ""
    } = invoiceData || {};
    const currencySymbol = "₹";
    const subtotal = items.reduce((acc, item) => acc + (item.qty*item.amount), 0);
    const taxAmount = subtotal*(tax/100);
    const total =  taxAmount+subtotal;

    return {
        title,
        companyName:company.name,
        companyAddress:company.address,
        companyPhone:company.phone,
        companyLogo:company.logo,

        invoiceNumber:invoice.number,
        invoiceDate:invoice.date,
        paymentDate:invoice.dueDate,

        accountName:account.name,
        bankName:account.bankName,
        accountNumber:account.number,
        accountIfscCode:account.accountIfscCode,

        billingName:billing.name,
        billingAddress:billing.address,
        billingPhone:billing.phone,

        shippingName:shipping.name,
        shippingAddress:shipping.address,
        shippingPhone:shipping.phone,

        currencySymbol,
        tax,
        items,
        notes,
        subtotal,
        taxAmount,
        total
    }
}