import React from "react";
import Link from "next/link";

const BigdataFunFacts = () => {
	return (
		<div className="funfacts-area bg-image ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>
						<strong>Experience & Experience</strong>
						<br /> you can rely on
					</h2>
					<div className="bar"></div>
				</div>

				<div className="d-flex flex-column flex-lg-row flex-xl-row">
					<div className="col">
						<div className="single-funfact">
							<h3>Experience</h3>
							<p className="text-justify">
								UIP has brought together four decades of expertise and
								experience in the field of pipe and piping components to meet
								your requirements.
							</p>
							<p className="text-justify">
								We pride ourselves in our packages to meet the customers’
								individual requirements with the best terms and conditions,
								competitive pricing and just in time deliveries.
							</p>
						</div>
					</div>

					<div className="col">
						<div className="single-funfact">
							<h3>Value for Money</h3>
							<p className="text-justify">
								We believe in providing our customers a real value for their
								money. Hence, we work on a transparent open book process where
								in, each stake holder viz. the Customer and the manufacturer
								knows the real status of every activity at all times - be it
								pricing, the production or the delivery and the shipment.
							</p>
							<p className="text-justify">
								We coordinate very closely with all our partners on the end user
								and on the production sides. on the production side, our partner
								mills devotedly participate with us to provide the most
								technically compliant, suitable and commercially economical
								solutions.
							</p>
						</div>
					</div>

					<div className="col">
						<div className="single-funfact">
							<h3>Commitment</h3>
							<p className="text-justify">
								We are fully committed to serve our customers by giving the best
								price, quality material and optimal and solutions with our
								seamless services at all times.
							</p>
							<p className="text-justify">
								UIP has accomplished and organized itself to meet the demands of
								future developments in order to stay the preferred choice of
								customer every time.
							</p>
						</div>
					</div>
				</div>

				<div className="contact-cta-box">
					<h3>Lets Talk!</h3>

					<Link href="/contact">
						<a className="btn btn-primary">Contact Us</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BigdataFunFacts;
