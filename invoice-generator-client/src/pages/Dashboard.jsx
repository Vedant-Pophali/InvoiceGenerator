import { useState, useEffect, useContext } from "react";
import {AppContext, initialInvoiceData} from "../context/AppContext.jsx";
import { getAllInvoices } from "../service/InvoiceService.js";
import { toast } from "react-hot-toast";
import { Plus } from "lucide-react";
import {formatDate} from "../util/formatInvoiceData.js";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@clerk/clerk-react";

const Dashboard = () => {
    const [invoices, setInvoices] = useState([]);
    const { baseUrl,setInvoiceData,setSelectedTemplate,setInvoiceTitle } = useContext(AppContext);
    const navigate = useNavigate();
    const {getToken} = useAuth();
    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const token = await getToken();
                const response = await getAllInvoices(baseUrl,token);
                setInvoices(response.data);
            } catch (error) {
                toast.error("Failed to load the invoices.");
                console.error(error);
            }
        };
        fetchInvoices();
    }, [baseUrl]);

    const handleViewClick = (invoice) => {
        setInvoiceData(invoice);
        setSelectedTemplate(invoice.template || "template1");
        setInvoiceTitle(invoice.title || "New Invoice");
        navigate('/preview');
    }
    const handleCreateNew = () => {
        setInvoiceTitle("New Invoice");
        setSelectedTemplate("template1");
        setInvoiceData(initialInvoiceData);
        navigate('/generate');
    }
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

                {/* Create New Invoice Card */}
                <div className="col">
                    <div
                        onClick={() => {handleCreateNew()}}
                        className="card h-100 d-flex justify-content-center align-items-center border border-2 border-light shadow-sm custom-pointer"
                        style={{ minHeight: "270px" }}                     >
                        <Plus size={48} />
                        <p className="mt-3 fw-medium">Create New Invoice</p>
                    </div>
                </div>

                {/* Render fetched invoices */}
                {invoices.map((invoice, idx) => (
                    <div key={invoice.id || idx} className="col">
                        <div className="card h-100 shadow-sm cursor-pointer" style={{ minHeight: "270px" }}
                             onClick={() => handleViewClick(invoice)}>
                            {invoice.thumbnailUrl && (
                                <img
                                    src={invoice.thumbnailUrl}
                                    alt="Invoice thumbnail"
                                    className="card-img-top p-3"
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                />
                            )}
                            <div className="card-body">
                                <h6 className="card-title mb-1">{invoice.title}</h6>
                                <small className="text-muted">
                                    Last Updated : {formatDate(invoice.lastUpdatedAt)}
                                </small>
                                <p className="card-text fw-semibold text-center">{invoice.name || "Untitled Invoice"}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Dashboard;