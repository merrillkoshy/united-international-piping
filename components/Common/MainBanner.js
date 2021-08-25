import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import { Carousel } from "react-responsive-carousel";

const MainBanner = () => {
    return (
        <div className="united-piping-banner">
            <div className="container">
                <div className="bigdata-analytics-content">
                    <Carousel showArrows={false}
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={4000}
                        stopOnHover={false}
                    // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
                    >
                        <h1 className="animate__animated animate__slideInLeft">
                            Making transparent transactions thereby giving you the most
                            reasonable pricing
                        </h1>

                        <h1 className="animate__animated animate__slideInLeft">
                            Delivering Optimal Value for your Money
                        </h1>

                        <h1 className="animate__animated animate__slideInLeft">
                            Reducing your CAPEX with most competitive proposals
                        </h1>

                        <h1 className="animate__animated animate__slideInLeft">
                            Mitigating your Project Quality/ Scheduling risks
                        </h1>
                    </Carousel>
                </div>
            </div>

            <div className="banner-boxes-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.GitPullRequest />
                                </div>
                                <h3>PIPES</h3>
                                <p>
                                    Material of Construction of the products range from Plain
                                    Carbon Steels to High Alloy.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.Disc />
                                </div>
                                <h3>FLANGES</h3>
                                <p>
                                    UPS is constantly expanding its product range to maintain the
                                    standards of global Piping Industry.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-banner-boxes">
                                <div className="icon">
                                    <Icon.PieChart />
                                </div>
                                <h3>FITTINGS</h3>
                                <p>
                                    All materials/products confirms to international standards
                                    such as API, ASTM, ASME, ISO, DIN & EN.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
