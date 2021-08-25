import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from "react-accessible-accordion";

const UpsAdvantage = () => {
	return (
		<>
			<PageBanner pageTitle="The UIP Advantage" />

			<div className="features-details-area ptb-80">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<p>
							It is common that inappropriate market mediation (from Sales and
							distribution intermediaries) in Piping Industry, instead of adding
							value to supply chain are becoming source of Increased Costs and
							delayed deliveries.{" "}
						</p>
						<p>
							On other hand, most of the producers are not prepared to deal
							directly with the end users/contractors due to their odd
							quantities requirements, documentation and stringent project
							specifications which creates bottlenecks to the production line.
							Such requirements are not feasible for the manufacturers to comply
							most of the times.{" "}
						</p>
						<div className="separate"></div>
						<img
							src="/images/the-uip-advantage.jpg"
							className="animate__animated animate__fadeInUp ios15"
							alt="The UIP Advantage"
						/>

						<div className="separate"></div>

						<p>
							We at UIP are bringing complete transparency to the Piping Value
							Chain by helping the customer and the manufacturer work seamlessly
							and in the process UIP will either eliminate or absorb the factors
							that creates impediments to manufacturers’production processes.
						</p>
					</div>

					<div className="row align-items-center">
						<div className="col mt-3 features-details">
							<div className="features-details-desc">
								<h3>How UIP will achieve this?</h3>
								<p>
									The backbone and the core strength of UIP is its team of
									highly experienced professionals who have been working over
									past four decadesfor some of the world’s biggest organizations
									in Energy Sector. This has equipped UIP with the
									understandings of the best practices of the Industries on one
									hand and, on other hand, has given us the confidence to
									deliver as per any given stringent requirements.
								</p>
								<p>
									Our experts know their market segment inside out. They remain
									abreast with the newest developments taking place in Piping
									Materials,Manufacturing processes, new Piping products,
									quality control, administration, coordination and logistics.
									Simultaneously, they have organized themselves to the demands
									of future developments and concepts In order to constantly add
									value to the supply chain and stay as the preferred choice of
									customers and manufacturers.
								</p>
								<p>
									On a macro level, we understand the various aspects of Client
									Requirement and At concentrated micro level, we work with
									selected and approved Manufacturers of significance to the
									client. We work closely with our clients to comprehend their
									specific requirements clearly, liaison with various stages in
									talking the language of the customer to the Manufacturer,
									thereby keeping the commitment and providing best Piping
									Solutions right from beginning till the End of the project.
								</p>
								<p>
									We at UIP are experts in the sourcing and supplying of
									materials to meet the individual requirements of a project,
									regardless of size, scopeor difficulty. We are aware of the
									importance of on-time delivery and the pressures of meeting
									fabrication schedules, and also the importance of accurate and
									up-to-date reporting.
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

export default UpsAdvantage;
