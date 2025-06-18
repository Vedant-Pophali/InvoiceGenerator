import axios from "axios";

// Save a new invoice
export const saveInvoice = async (baseUrl, payload, token) => {
    return axios.post(`${baseUrl}/invoices`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Get all invoices
export const getAllInvoices = async (baseUrl, token) => {
    return axios.get(`${baseUrl}/invoices`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Delete an invoice by ID
export const deleteInvoice = async (baseUrl, id, token) => {
    return axios.delete(`${baseUrl}/invoices/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Send invoice via email
export const sendEmail = (baseUrl, formData, token) => {
    return axios.post(`${baseUrl}/invoices/sendInvoice`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};
