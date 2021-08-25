import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";


const ServiceDetails = () => {
    return (
        <>
            <PageBanner pageTitle="Our Featured Services" />

            <div className="services-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Material Treatments</h3>
                                <>
                                    <ul>
                                        <li>Blasting and/or coating with red lead primer</li>
                                        <li>Miter cutting</li>
                                        <li>Thermal and Electrolytic Galvinizing</li>
                                        <li>Chemical Cleaning</li>
                                        <li>
                                            Mechanical Treatment of components such as turning and
                                            tapering.
                                        </li>
                                    </ul>
                                    <h4>Various Coatings :</h4>
                                    <ul>
                                        <li>3LPE COATING</li>
                                        <li>PP COATING</li>
                                        <li>INTERNAL AND EXTERNAL FBE</li>
                                        <li>INTERNAL EPOXY COATED </li>
                                        <li>EXTERNAL COAL TAR ENAMEL COATED </li>
                                        <li>INTERNAL MORTAR LINED </li>
                                        <li>EXTERNAL MORTAR LINED</li>
                                    </ul>
                                </>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/service-1.jpg"
                                width="100%"
                                className="animate__animated animate__fadeInUp"
                                alt="Material Treatments - United Piping Solutions"
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/service-2.jpg"
                                width="100%"
                                className="animate__animated animate__fadeInUp"
                                alt="Logistics Services"
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h2>Material Storage</h2>
                                <p className="text-justify">
                                    Thanks to our efficient stock management for which we use the
                                    most advanced software available, we are able to reduce our
                                    total costs. This makes us able to control our prices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Consultancy and Customer Dedicated services</h3>
                                <h4>Project management</h4>
                                <p className="text-justify">
                                    Based on our knowledge and over 40 years of experience, we are
                                    able to handle the entire material management on complex
                                    construction projects from concept to execution phase.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/service-3.jpg"
                                width="100%"
                                className="animate__animated animate__fadeInUp"
                                alt="Consultancy and Customer Dedicated services - United Piping Solutions"
                            />
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 services-details-image">
                            <img
                                src="/images/service-4.jpg"
                                width="100%"
                                className="animate__animated animate__fadeInUp"
                                alt="Document Management - United Piping Solutions"
                            />
                        </div>

                        <div className="col-lg-6 services-details">
                            <div className="services-details-desc">
                                <h3>Document Management</h3>

                                <p className="text-justify">
                                    We provide complete technical documentation and data dossiers
                                    in the contractual language to complete the supply.
                                    Documentation supplied, depending on client request, may
                                    consist of:
                                </p>
                                <ul>
                                    <li>Project Quality Plan</li>
                                    <li>Inspection & Test Plan</li>
                                    <li>Manufacturing and testing procedures</li>
                                    <li>Welding procedure specifications (WPS)</li>
                                    <li>Prequalification records (PQR)</li>
                                    <li>NDT Reports</li>
                                    <li>
                                        Material Test Certificate to DIN 50049 or EN 10204 type 2.1,
                                        2.2, 2.3, 3.1, 3.2, (3.1b, 3.1c) according to client
                                        requirements. Each QC dossier is supplied with the number of
                                        copies stipulated in the contract.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="separate"></div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 services-details">
                                <div className="services-details-desc">
                                    <h3>Fabrication</h3>
                                    <h4>Project management</h4>
                                    <p className="text-justify">
                                        Based on our knowledge and over 40 years of experience, we are
                                        able to handle the entire material management on complex
                                        construction projects from concept to execution phase.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 services-details-image">
                                <img
                                    src="/images/service-6.jpg"
                                    width="100%"
                                    className="animate__animated animate__fadeInUp"
                                    alt="Fabrication - United Piping Solutions"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ServiceDetails;
