import './LandingPage.css';
import { assets } from "../../assets/assets.js";
import { Twitter, Facebook, Linkedin,Instagram } from 'lucide-react';
const LandingPage = () => {
    return (
        <>
            <header id="hero" className="hero-section text-white text-center">
                <div className="container py-5 d-flex flex-column justify-content-center" style={{ fontSize: '1.6rem' }}>
                    <div className="row py-lg-5">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <h1 className="display-3 fw-bold mb-4">
                                Effortless Invoice Generator
                            </h1>
                            <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                                One Stop Invoice Generation Solution
                            </p>
                            <p>
                                <button className="btn btn-lg btn-warning fw-bold rounded-pill my-2">
                                    Generate Invoice
                                </button>
                                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill m-2">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section id="how-it-works" className="py-5" style={{
                background: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)'
            }}>
                <div className="container text-center">
                    <h2 className="mb-5 fw-bold" style={{ color: '#fd7e14' }}>
                        Generate Your Invoice in 4 Easy Steps
                    </h2>
                    <div className="row g-4">
                        {[
                            { step: "1. Enter Details", desc: "Provide your business and client info." },
                            { step: "2. Add Items", desc: "List products or services clearly." },
                            { step: "3. Choose Template", desc: "Select your preferred design style." },
                            { step: "4. Download/Share", desc: "Export as PDF or share via link." }
                        ].map((item, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="card h-100 border-0 shadow-sm bg-dark text-white">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold" style={{ color: '#fd7e14' }}>{item.step}</h5>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" className="py-5 text-white" style={{ backgroundColor: "#000" }}>
                <div className="container">
                    <h2 className="text-center fw-bold mb-5" style={{ color: '#fd7e14' }}>Powerful Features</h2>

                    {/* Feature 1 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <img src={assets.template1} alt="Feature 1" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-warning">Smart Auto-Fill</h3>
                            <ul className="text-white">
                                <li>Remembers previously entered client and business details</li>
                                <li>Auto-populates future invoices to save time</li>
                                <li>Reduces human error and improves accuracy</li>
                                <li>Ideal for recurring clients or repeat entries</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="row align-items-center mb-5 flex-md-row-reverse">
                        <div className="col-md-6">
                            <img src={assets.template1} alt="Feature 2" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-warning">Multi-Currency & Tax Compliance</h3>
                            <ul className="text-white">
                                <li>Supports all major global currencies</li>
                                <li>Real-time exchange rate conversion</li>
                                <li>Built-in tax formats (GST, VAT, etc.)</li>
                                <li>Helps maintain compliance in any region</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <img src={assets.template1} alt="Feature 3" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-warning">Professional & Customizable Templates</h3>
                            <ul className="text-white">
                                <li>Wide range of industry-specific templates</li>
                                <li>Add logo, colors, layout adjustments</li>
                                <li>Fully brandable designs for professionalism</li>
                                <li>Visually appealing invoices to impress clients</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="row align-items-center mb-4 flex-md-row-reverse">
                        <div className="col-md-6">
                            <img src={assets.template1} alt="Feature 4" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold text-warning">Secure Cloud Access & Sharing</h3>
                            <ul className="text-white">
                                <li>Encrypted cloud storage for safety</li>
                                <li>Access invoices from any device</li>
                                <li>Instant PDF download or link sharing</li>
                                <li>Ensures data backup and easy collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="py-5 text-center text-white">
                <div className="container">
                    <h2 className="fw-bold mb-4" style={{ color: 'black' }}>Ready to Create Your Invoice?</h2>
                    <p className="lead mb-4" style={{ fontSize: '1.2rem' }}>
                        Generate professional, branded invoices in just a few clicks.
                    </p>
                    <button className="btn btn-lg btn-warning fw-bold rounded-pill px-4">
                        Start Now
                    </button>
                </div>
            </section>
            <footer className="text-white py-4" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container text-center">
                    <img
                        src={assets.logo}
                        alt="Logo"
                        style={{ height: '40px', marginBottom: '10px' }}
                    />
                    <p className="mb-1 fw-bold">Effortless Invoice Generator</p>
                    <p className="mb-1">© {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mb-0">
                        <a href="/" className="text-warning text-decoration-none mx-2">Home</a>|
                        <a href="/dashboard" className="text-warning text-decoration-none mx-2">Dashboard</a>|
                        <a href="#how-it-works" className="text-warning text-decoration-none mx-2">How it Works</a>
                    </p>
                    <p className="mt-3">
                        <a href="#" className="text-white-50 me-3 fs-5"><Twitter /></a>
                        <a href="#" className="text-white-50 me-3 fs-5"><Facebook /></a>
                        <a href="#" className="text-white-50 me-3 fs-5"><Linkedin /></a>
                        <a href="#" className="text-white-50 me-3 fs-5"><Instagram /></a>
                    </p>

                </div>
            </footer>
        </>
    )
}
export default LandingPage;