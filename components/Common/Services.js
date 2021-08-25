import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import ServicesModal from "./ServicesModal";

const Services = () => {
    const [modalHeader, setModalHeader] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        return () => {
            setModalHeader("");
        };
    }, []);
    return (
        <div className="repair-services-area ptb-80 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Featured Services</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg1">
                            <div className="icon">
                                <i className="flaticon-diamond"></i>
                            </div>

                            <h3>Material Treatments</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Material Treatments");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg2">
                            <div className="icon">
                                <i className="flaticon-delivery-truck"></i>
                            </div>

                            <h3>Logistics Services</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Logistics");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg3">
                            <div className="icon">
                                <i className="flaticon-handshake"></i>
                            </div>

                            <h3>Consultancy and Customer Dedicated services</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Consultancy & Customer Dedicated");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg4">
                            <div className="icon">
                                <i className="flaticon-data"></i>
                            </div>

                            <h3>Document Management</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Document Management");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg5">
                            <div className="icon">
                                <i className="flaticon-factory"></i>
                            </div>

                            <h3>Inspection and Testing</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Inspection and Testing");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-services bg6">
                            <div className="icon">
                                <i className="flaticon-factory"></i>
                            </div>

                            <h3>Fabrication</h3>

                            <a
                                onClick={() => {
                                    setModalHeader("Fabrication");
                                    handleShow();
                                }}
                            >
                                <Icon.ArrowRight />
                            </a>
                        </div>
                    </div>
                    <Link href="/services">
                        <a className="expanded-page-link">All Services <Icon.ArrowRight /></a>
                    </Link>
                </div>
            </div>
            <ServicesModal
                show={show}
                handleClose={handleClose}
                modalHeader={modalHeader}
            />
        </div>
    );
};

export default Services;
