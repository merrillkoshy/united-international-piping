import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import * as Icon from "react-feather";

const Solutions = () => {
	return (
		<>
			<PageBanner pageTitle="Solutions" />

			<div className="services-area-two pt-80 pb-50 bg-f9f6f6">
				<div className="container">
					<div className="section-title">
						<p className="text-justify">
							To ensure our partner mills (manufacturers) and our customers
							benefit from our knowledge and experience, we have clustered our
							expertise around the segments as mentioned below:
							<div className="bar"></div>
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-6">
							<div className="single-services-box">
								<div className="icon">
									<Icon.ArrowUp />
								</div>
								<h3>
									<a>UpStream and Offshore</a>
								</h3>
								<p className="text-justify">
									In the continuous search for new energy reserves, oil and gas
									are being extracted from beneath the bottom of the oceans at
									an ever greater scale. To exploit these energy sources, fixed,
									as well as floating production platforms are being developed
									and constructed. Due to extreme circumstances under which
									these platforms are being used, knowledge concerning the
									application areas of different types of steel is essential.
								</p>
								<h3>
									<a>Product Range & Services</a>
								</h3>
								<p className="text-justify">
									UIP provides its customers, with technical advice and high
									quality materials, such as Duplex, Superduplex, Structural
									steels including Seamless & Welded tubulars, line pipes,
									beams, plates and cones, conductor pipes & piles.
								</p>
							</div>
						</div>

						<div className="col-6">
							<div className="single-services-box">
								<div className="icon">
									<Icon.ArrowDown />
								</div>
								<h3>
									<a>DownStream and Mid Stream Industries </a>
								</h3>
								<p className="text-justify">
									Pipes, valves, fittings and flanges play a vital role in
									serving chemical, Petro Chemical, Oil and Gas refining, and
									power companies all over the world. These four critical
									components are closely interrelated. It is crucial therefore
									to have a supplier you can rely on, who is able to quickly and
									economically fulfil all your needs. A reliable manufacturer’s
									support, a strong team of professionals and a highly efficient
									logistics operation guarantee an optimum level of service
									thatmakes UIP your IDEAL PARTNER . Our experts have a wealth
									of technical knowledge and can assist you in determining the
									specifications and availability of pipes and valves you need
									for specific purposes, thus enabling you to make the right
									choice.
								</p>
								<h3>
									<a>Product range & Services:</a>
								</h3>
								<p className="text-justify">
									Packages including pipes, fittings, flanges & valves as well
									as nuts & bolts, gaskets, filters, strainers etc.
								</p>
							</div>
						</div>
						<div className="col-6">
							<div className="single-services-box">
								<div className="icon">
									<Icon.Database />
								</div>
								<h3>
									<a>Infrastructure, Building and Water Industry </a>
								</h3>
								<p className="text-justify">
									Infrastructure and Building Industries (For Air Conditioning,
									Fire Water lines, Chilled Water lines), Airports, Hospitals,
									Shopping Malls, Greenhouses, Stadiums, Bridges, Sewage
									Treatment and Desalination Plants, use various pipe and tube
									materials. UIP has a strong position in this segment as well,
									particularly in GCC Countries. We serve our customers with
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

						<div className="col-6">
							<div className="single-services-box">
								<div className="icon">
									<Icon.BatteryCharging />
								</div>
								<h3>
									<a>Power Generation & Renewable Energy</a>
								</h3>
								<p className="text-justify">
									UIP has extensive experience in all different power segments.
									From Hydro power up to the biggest CCPP and Lignite Fired
									Power stations, UIP is able tosupport its customers in every
									stage of demand.
								</p>
								<h3>
									<a>Product range & Services</a>
								</h3>
								<p className="text-justify">
									Heavy wall seamless and welded carbon & alloy pipes and
									associated fittings and flanges, transition pieces and
									complete fabrication of jacketsand tripods.
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

export default Solutions;
