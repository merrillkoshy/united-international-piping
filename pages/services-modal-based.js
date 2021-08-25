import React, { useEffect, useState } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { Modal, Button } from 'react-bootstrap';
import ServicesModal from '@/components/Common/ServicesModal';

const Services5 = () => {

    const [modalHeader, setModalHeader] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

        return () => {
            setModalHeader("")
        }
    }, [])

    return (
        <>


            <PageBanner pageTitle="Services" />

            <div className="agency-services-area ptb-80 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img
                                    onClick={
                                        () => {
                                            setModalHeader("Material Treatments")
                                            handleShow()

                                        }
                                    }
                                    src="/images/service-1.jpg" alt="image" />

                                <div className="content">
                                    <h3>

                                        <a>Material Treatments</a>

                                    </h3>


                                    <a
                                        onClick={
                                            () => {
                                                setModalHeader("Material Treatments")
                                                handleShow()

                                            }
                                        }
                                        className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img
                                    onClick={
                                        () => {
                                            setModalHeader("Logistics")
                                            handleShow()

                                        }
                                    }
                                    src="/images/service-2.jpg" alt="image" />

                                <div className="content">
                                    <h3>

                                        <a>Logistics</a>

                                    </h3>


                                    <a
                                        onClick={
                                            () => {
                                                setModalHeader("Logistics")
                                                handleShow()

                                            }
                                        }
                                        className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img
                                    onClick={
                                        () => {
                                            setModalHeader("Consultancy & Customer Dedicated")
                                            handleShow()

                                        }
                                    }
                                    src="/images/service-3.jpg" alt="image" />

                                <div className="content">
                                    <h3>

                                        <a>Consultancy & Customer Dedicated</a>

                                    </h3>


                                    <a
                                        onClick={
                                            () => {
                                                setModalHeader("Consultancy & Customer Dedicated")
                                                handleShow()

                                            }
                                        }
                                        className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img
                                    onClick={
                                        () => {
                                            setModalHeader("Document Management")
                                            handleShow()

                                        }
                                    }
                                    src="/images/service-4.jpg" alt="image" />

                                <div className="content">
                                    <h3>

                                        <a>Document Management</a>

                                    </h3>


                                    <a
                                        onClick={
                                            () => {
                                                setModalHeader("Document Management")
                                                handleShow()

                                            }
                                        }
                                        className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img
                                    onClick={
                                        () => {
                                            setModalHeader("Inspection and Testing")
                                            handleShow()

                                        }
                                    }
                                    src="/images/service-5.jpg" alt="image" />

                                <div className="content">
                                    <h3>

                                        <a>Inspection and Testing</a>

                                    </h3>


                                    <a
                                        onClick={
                                            () => {
                                                setModalHeader("Inspection and Testing")
                                                handleShow()

                                            }
                                        }
                                        className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <ServicesModal
                    show={show}
                    handleClose={handleClose}
                    modalHeader={modalHeader}
                />
                {/* Shape Images */}
                {/* <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div> */}
            </div>

            <Footer />
        </>
    )
}

export default Services5;