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
                                <img src="/images/msg-from-md.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>Message from Managing Director</h2>
                                <div className="bar"></div>

                                <p className="text-justify">We at <strong>UNITED PIPING SOLUTIONS</strong> aspire to become the most dependable and innovative Piping Supplier for every EPC operating in Middle East.</p>

                                <p className="text-justify">Our mission is to introduce new piping supply solutions in our market, hence creating the highest value to all our stake holders.</p>
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