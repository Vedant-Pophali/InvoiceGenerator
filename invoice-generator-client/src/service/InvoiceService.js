import axios from "axios";

export const saveInvoice = async(baseUrl,payload) => {
    return axios.post(`${baseUrl}/invoices`, payload);
}

export const getAllInvoices = async(baseUrl) => {
    return axios.get(`${baseUrl}/invoices`);
}

export const deleteInvoice = async(baseUrl,id) => {
    return axios.delete(`${baseUrl}/invoices/${id}`);
}

export const sendEmail = (baseUrl, formData) => {
    return axios.post(`${baseUrl}/invoices/sendInvoice`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};