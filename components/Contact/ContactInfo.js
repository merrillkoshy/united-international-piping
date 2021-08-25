import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
	return (
		<div className="contact-info-area ptb-80">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.Mail />
							</div>
							<h3>Mail Here</h3>
							<p>
								<a href="mailto:info@unitedpipinggroup.com">
									info@unitedpipinggroup.com
								</a>
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.MapPin />
							</div>
							<h3>Head Quarters</h3>
							<p>
								Unit No. 2501 & 2502, Jumeirah Business Center-4, Plot No.N2,
								Jumeirah Lake Towers, PO Box: 634302, Dubai, UAE
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-info-box">
							<div className="icon">
								<Icon.Phone />
							</div>
							<h3>Call Here</h3>
							<p>
								<Icon.Phone className="my-1 mx-3" />
								<a href="tel:+97144328542">+971 4 432 8542</a>
							</p>
							<p>
								<Icon.Printer className="my-1 mx-3" />
								<a>+971 4 432 8439</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
