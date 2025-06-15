import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const MenuBar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-sm sticky-top"
            style={{ background: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)' }}
        >
            <div className="container py-2">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <Logo />
                    <span
                        className="fw-bolder fs-4 mx-3"
                        style={{ letterSpacing: '-0.5px', color: '#0D6EFDB2' }}
                    ></span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center gap-4">
                        <li className="nav-item">
                            <Link className="nav-link fw-medium text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-medium text-white" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <button className="navbar-link fw-medium text-white bg-transparent border-0">Generate</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary rounded-pill px-4">Login/Signup</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;