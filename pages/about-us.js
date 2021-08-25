import React from 'react';

import Team from "@/components/Common/Team";

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
                                <img src="/images/about-us.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                {/* <span className="sub-title">About Us</span> */}
                                <h2>Piping The World</h2>
                                <div className="bar"></div>

                                <p className="text-justify">United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials. Our goal is to promote, supply and distribute their piping products and services to Energy, Chemical, Petrochemical, Shipbuilding and Mechanical industries globally. UPS is strategically located in the DMCC free zone of Dubai. The company’s current geographical presence covers the GCC countries of the Middle East (KSA, OMAN, UAE, Kuwait, Bahrain & Qatar), in addition to China & South Korea.
                                </p>

                                <p className="text-justify">Our product portfolio consists of high quality industrial materials & products such as Steel Pipes, Pipe Fittings, Flanges, Plates, Valves and Stud Bolts. Materials of Construction of the products range from Plain Carbon Steels and low temperature grades to high yield grades, low and high Alloys, other Nickel Alloys, Stainless Steels, Chrome Moly and Clad materials. We are constantly expanding our product range to maintain the standards of global Piping Industry. All materials/products confirms to international standards such as API, ASTM, ASME, ISO, DIN & EN.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about-inner-area">
                        <div className="row justify-content-start flex-lg-row flex-column">
                            <div className="col-lg-6 col mt-3">
                                <div className="about-text">
                                    <h3>Value for Money</h3>
                                    <p className="text-justify">We believe in providing our customers a real value for their money. Hence, we work on a transparent open book process where in, eachstake holder viz. the Customer and the manufacturer knows the real status of every activity at all times - be it pricing, the production or the delivery and the shipment. We coordinate very closely with all our partners on the end user and on the production sides. On the production side, our partner mills devotedly participate with us to provide the mosttechnically compliant, suitable and commercially economical solutions.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                                <div className="about-text">
                                    <h3>Experience</h3>
                                    <p className="text-justify">UPS has brought together four decades of expertise and experience in the field of pipe and piping components to meet your requirements. We pride ourselves in our packages to meet the customers’ individual requirements with the best terms and conditions, competitive pricing and just in time deliveries.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col mt-3">
                                <div className="about-text">
                                    <h3>Quality and service</h3>
                                    <p className="text-justify">UPS has a passionate commitment to Quality and Safety. Providing highest quality products and services to our clients has been the top most determinant of our corporate policy. Hence, we have partnered ourselves with selected world class quality conscious manufacturers. At UPS we have set high quality standards forus and we continuously strive for learning and improving our work processes.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col mt-3">
                                <div className="agency-about-img">
                                    <img src="/images/about-us-2.jpg" alt="image" />
                                </div>
                            </div>


                            <div className="col mt-3">
                                <div className="about-text">
                                    <h3>Commitment</h3>
                                    <p className="text-justify">We are fully committed to serve our customers by giving the best price, quality material and optimal and solutions with our seamless services at all times. UPS has accomplished and organized itself to meet the demands of future developments in order to stay the preferred choice of customer every time.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                {/* <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
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

            <Team />


            <Footer />
        </>
    )
}

export default About3;