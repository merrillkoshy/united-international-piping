import React from "react";
import Link from "next/link";

const IndustriesWeServe = () => {
	return (
		<div className="industries-serve-area ptb-80">
			<div className="container">
				<div className="section-title">
					<h2>Industries We Serve</h2>
					<div className="bar"></div>
					<p>
						To ensure our partner mills (manufacturers) and our customers
						benefit from our knowledge and experience, we have clustered our
						expertise around the segments as mentioned below.
					</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-3 col-6 col-sm-6 col-md-4">
						<div className="d-flex single-industries-serve-box">
							<div className="icon">
								<i className="bx bx-droplet"></i>
							</div>
							<div className="flex-wrap">
								<div className="m-0 m-lg-3 m-xl-3">
									Oil & Gas :<br /> Upstream | Midstream | Downstream{" "}
								</div>
							</div>
							<Link href="/industries-we-serve">
								<a className="link-btn"></a>
							</Link>
						</div>
					</div>

					<div className="col-lg-3 col-6 col-sm-6 col-md-4">
						<div className="single-industries-serve-box">
							<div className="icon">
								<i className="bx bxs-battery-charging"></i>
							</div>
							<div className="m-0 m-lg-3 m-xl-3">Power Plants</div>
							<Link href="/industries-we-serve">
								<a className="link-btn"></a>
							</Link>
						</div>
					</div>

					<div className="col-lg-3 col-6 col-sm-6 col-md-4">
						<div className="single-industries-serve-box">
							<div className="icon">
								<i className="bx bx-glasses"></i>
							</div>
							<div className="m-0 m-lg-3 m-xl-3">Chemical & Petrochemical</div>
							<Link href="/industries-we-serve">
								<a className="link-btn"></a>
							</Link>
						</div>
					</div>

					<div className="col-lg-3 col-6 col-sm-6 col-md-4">
						<div className="single-industries-serve-box">
							<div className="icon">
								<i className="bx bx-health"></i>
							</div>
							<div className="m-0 m-lg-3 m-xl-3">Water Treatment</div>
							<Link href="/industries-we-serve">
								<a className="link-btn"></a>
							</Link>
						</div>
					</div>

					<div className="col-lg-3 col-6 col-sm-6 col-md-4">
						<div className="single-industries-serve-box">
							<div className="icon">
								<i className="bx bx-building"></i>
							</div>
							<div className="m-0 m-lg-3 m-xl-3">
								Infra, Building & Marine Industries
							</div>
							<Link href="/industries-we-serve">
								<a className="link-btn"></a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="analytics-shape2">
                <img src="/images/bigdata-analytics/vector.png" alt="image" />
            </div> */}
		</div>
	);
};

export default IndustriesWeServe;
