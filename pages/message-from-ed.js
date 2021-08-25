import React from 'react';

import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';


const About3 = () => {
    return (
        <>


            <PageBanner pageTitle="About Us" />

            <div className="agency-about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-img">
                                <img src="/images/msg-from-ed.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>Message from Executive Director</h2>
                                <div className="bar"></div>

                                <p className="text-justify">We at <strong>UNITED PIPING SOLUTIONS</strong> aim to provide our supplies to every Capital Project in Middle East in order to provide total piping supply solutions to the EPC's.</p>

                                <p className="text-justify">Providing an honest service to all our clients, along with efficiently honoring all their commitments is our top most priority.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            <Footer />
        </>
    )
}

export default About3;