import React, { useEffect, useState } from "react";

const Team = () => {
	const [hovered, setHover] = useState(false);

	useEffect(() => {
		return () => {
			setHover(false);
		};
	}, []);

	return (
		<div className="team-area ptb-80 bg-f9f6f6">
			<div className="container">
				<div className="section-title">
					<h2>Our Awesome Team</h2>
					<div className="bar"></div>
					<p>
						With over four decades of expertise and experience in the field of
						pipe and piping components under our belts, we understand how to
						best serve your requirements through tried and true principles
					</p>
				</div>
				<div className="agency-about-img">
					<img
						className="team"
						src="/images/our-team.jpg"
						onMouseOver={() => setHover(true)}
						style={{
							transition: "1s",
							width: hovered ? "52.5%" : "95%",
						}}
						alt="UIP-team"
					/>
					<img
						className="team"
						src="/images/our-team-2.jpg"
						style={{
							display: hovered ? "flex" : "none",
							// display: "flex",
							transition: "1s",
							width: "52.5%",
							position: "relative",
							top: "-50vh",
							left: "40vw",
							transform: "rotateZ(2deg)",
						}}
						alt="UIP-team"
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
