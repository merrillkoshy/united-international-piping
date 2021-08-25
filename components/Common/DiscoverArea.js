import React from "react";
import Link from "next/link";

const DiscoverArea = () => {
	return (
		<div className="discover-area ptb-80">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="discover-image">
							<img src="/images/uip-niche-1.jpg" alt="image" />
							<img src="/images/uip-niche.png" alt="image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="discover-content">
							<h2>THE UIP NICHE ADVANTAGE</h2>
							<p className="text-justify">
								On a Macro level, we understand the various aspects of client
								requirement and at concentrated micro level, we work with
								selected and approved manufacturers of significance to the
								client. We work closely with our clients to comprehend their
								specific requirements clearly, liason with various stages in
								talking the language of the customer with the manufacturer,
								thereby keeping the commitment and providing best piping
								solutions right from beginning till the end of the project.{" "}
							</p>
							<Link href="/uip-advantage">
								<a className="btn btn-primary">Discover More</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="analytics-shape1">
                <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
            </div> */}
		</div>
	);
};

export default DiscoverArea;
