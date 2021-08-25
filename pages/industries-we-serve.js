import React from "react";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";

const ServiceDetails = () => {
	return (
		<>
			<PageBanner pageTitle="Industries We Serve" />

			<div className="services-details-area ptb-80">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Downstream and Midstream Industries</h3>
								<p className="text-justify">
									Pipes, valves, fittings and flanges play a vital role in
									serving Chemical, Petro Chemical, Oil and Gas refin- ing, and
									power companies all over the world. these four critical
									components are closely inter-related. it is crucial therefore
									to have a supplier you can rely on, who is able to quickly and
									economically fulfil all your needs. a reliable manufacturer’s
									support, a strong team of professionals and a highly efficient
									logistics operation guarantee an optimum level of service that
									makes UIP your ideal Partner. our experts have a wealth of
									technical knowledge and can assist you in determining the
									specifications and availability of pipes and valves you need
									for specific purposes, thus enabling you to make the right
									choice.
								</p>
							</div>
						</div>

						<div className="col-lg-6 services-details-image">
							<img
								src="/images/industries-1.jpg"
								width="100%"
								className="animate__animated animate__fadeInUp"
								alt="Downstream and Midstream Industries - United International Piping"
							/>
						</div>
					</div>

					<div className="separate"></div>

					<div className="row align-items-center">
						<div className="col-lg-6 services-details-image">
							<img
								src="/images/industries-2.jpg"
								width="100%"
								className="animate__animated animate__fadeInUp"
								alt="Upstream and Offshore Industries - United International Piping"
							/>
						</div>

						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Upstream and Offshore</h3>

								<p className="text-justify">
									In the continuous search for new energy reserves, oil and gas
									are being extracted from beneath the bottom of the oceans at
									an ever greater scale. To exploit these energy sources, fixed,
									as well as floating production platforms are being developed
									and constructed. due to extreme circumstances under which
									these platforms are being used, knowledge concerning the
									application areas of different types of steel is essential.
								</p>
								<h4>Product range & Services:</h4>
								<p className="text-justify">
									UIP provides its customers, with technical advice and high
									quality materials, such as duplex, Superduplex, Structural
									steels including Seamless & Welded tubulars, line pipes,
									beams, plates and cones, conductor pipes & piles.
								</p>
							</div>
						</div>
					</div>

					<div className="separate"></div>

					<div className="row align-items-center">
						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Power Generation & Renewable Energy</h3>
								<p className="text-justify">
									UIP has extensive experience in all differ- ent power
									segments. From Hydro power up to the biggest CCPP and lignite
									Fired Power stations, UIP is able to support its customers in
									every stage of demand.
								</p>
								<h4>Product range & Services:</h4>
								<p className="text-justify">
									Heavy wall seamless and welded carbon & alloy pipes and
									associated fittings and flanges, transition pieces and
									complete fabrication of jackets and tripods.
								</p>
							</div>
						</div>

						<div className="col-lg-6 services-details-image">
							<img
								src="/images/industries-3.jpg"
								width="100%"
								className="animate__animated animate__fadeInUp"
								alt="Power Generation & Renewable Energy - United International Piping"
							/>
						</div>
					</div>

					<div className="separate"></div>

					<div className="row align-items-center">
						<div className="col-lg-6 services-details-image">
							<img
								src="/images/industries-4.jpg"
								width="100%"
								className="animate__animated animate__fadeInUp"
								alt="Infrastructure, Building and Water Industry - United International Piping"
							/>
						</div>

						<div className="col-lg-6 services-details">
							<div className="services-details-desc">
								<h3>Infrastructure, Building and Water Industry</h3>

								<p className="text-justify">
									Infrastructure and Building industries (For air Conditioning,
									Fire Water lines, Chilled Water lines), airports, Hospitals,
									Shopping Malls, greenhouses, Stadiums, Bridges, Sewage
									treatment and desalination Plants, use various pipe and tube
									materials. UIP has a strong position in this segment as well,
									particularly in gCC Countries. We serve our customers with
									local stocks, project management, and treatments such as
									bending and cutting of materials
								</p>

								<p className="text-justify">
									The services and support provided are tailored to the needs of
									a particular customer and project, and are driven by in-depth
									knowledge of the products and manufacturing processes
									involved.
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

export default ServiceDetails;
