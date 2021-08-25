import React from "react";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";

const Quality = () => {
	return (
		<>
			<PageBanner pageTitle="Quality" />

			<div className="services-details-area ptb-80">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Our Passion – Quality and Safety</h3>
								<p>
									At UIP, we are driven to constantly raise our standards of
									quality and reject notions about what is “good enough”. In
									order to continuously improve product quality, reduce costs,
									and consistently meet customer specifications, a comprehensive
									quality assurance system has been implemented across the
									organization.
								</p>

								<h3>ISO 9001 Compliant</h3>
								<p>
									Our quality systems are registered by nationally and
									internationally accredited registrars. These systems ensure
									that customer requirements are understood and effectively
									communicated throughout the organization. Sales, purchasing,
									operations, and quality-related activities are documented and
									all employees extensively trained.
								</p>
								<p>
									Each year, quality objectives are set throughout the
									organization. Management regularly reviews performance against
									these goals and provides resources to ensure continued
									progress and success. Quality planning ensures our customers
									can expect quality products and service right from the start.
								</p>
							</div>
						</div>

						<div className="col-lg-6 services-details-image">
							<img
								src="/images/quality.jpg"
								className="animate__animated animate__fadeInUp"
								alt="image"
							/>
						</div>
					</div>

					<div className="separate"></div>

					<div className="row align-items-center">
						<div className="col-lg-6 services-details-image">
							<img
								src="/images/hse.png"
								className="animate__animated animate__fadeInUp"
								alt="image"
							/>
						</div>

						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Safety First, Always.</h3>
								<p>
									UIP is committed to providing a safe and healthy work
									environment for our employees. We recognize both the moral
									obligations and legislative requirements as the cornerstone of
									this commitment and are determined to reach our objective of
									providing an accident and illness-free workplace. Our programs
									include documented Safety Management, Fleet Management,
									Equipment Management, and Environmental Management Programs.
									These programs also serve to ensure that you are dealing with
									a responsible and reliable company. We are proud of our
									passionate commitment to quality and safety.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Quality;
