import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { Carousel } from "react-responsive-carousel";

const Fabrication = () => {
	return (
		<>
			<PageBanner pageTitle="Fabrication" />

			<div className="services-details-area ptb-80">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Specialized in Engineering & Fabrication Solutions:</h3>
								<p className="text-justify">
									UPS has the capabilities to fabricate and spool large and
									light structures, supports, pressure vessels, piping spools,
									skid mounted systems, heat exchangers, columns, and storage
									tanks as per the customer specific requirement in stainless
									steel, duplex, super duplex, alloy steel & carbon steel. We
									provide an in-house and sub-contracted expertise in designing,
									production and site construction activities comprising of
									mechanical, painting, electrical and instrumentation works
									serving mid to large-scale and heavy-duty projects in
									industries including Cement, Power, Refineries, Aluminum,
									Steel Industry, Petrochemicals and Gas & Oil Sectors.
								</p>
							</div>
						</div>

						<div className="col-lg-6 services-details-image">
							<Carousel
								showArrows={true}
								showIndicators={true}
								showThumbs={false}
								autoPlay={true}
								infiniteLoop={true}
								interval={4000}
								stopOnHover={true}
							>
								<img
									src={"/images/fabrication/fabrication-1.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
								<img
									src={"/images/fabrication/fabrication-2.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
								<img
									src={"/images/fabrication/fabrication-3.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
								<img
									src={"/images/fabrication/fabrication-4.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
								<img
									src={"/images/fabrication/fabrication-5.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
								<img
									src={"/images/fabrication/fabrication-6.jpg"}
									alt={"Fabrication-United Piping Soluions"}
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Fabrication;
