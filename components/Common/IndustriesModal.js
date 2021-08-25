import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ServicesModal = ({ show, handleClose, modalHeader }) => {
	useEffect(() => {
		modalBodyMaker();
	}, [modalHeader]);

	const modalBodyMaker = () => {
		switch (modalHeader) {
			case "Material Treatments":
				return (
					<>
						<ul>
							<li>Blasting and/or coating with red lead primer</li>
							<li>Miter cutting</li>
							<li>Thermal and Electrolytic Galvinizing</li>
							<li>Chemical Cleaning</li>
							<li>
								Mechanical Treatment of components such as turning and tapering.
							</li>
						</ul>
						<h4>Various Coatings :</h4>
						<ul>
							<li>3LPE COATING</li>
							<li>PP COATING</li>
							<li>INTERNAL AND EXTERNAL FBE</li>
							<li>INTERNAL EPOXY COATED </li>
							<li>EXTERNAL COAL TAR ENAMEL COATED </li>
							<li>INTERNAL MORTAR LINED </li>
							<li>EXTERNAL MORTAR LINED</li>
						</ul>
					</>
				);

				break;
			case "Logistics":
				return (
					<>
						<h2>Material Storage</h2>
						<p>
							Thanks to our efficient stock management for which we use the most
							advanced software available, we are able to reduce our total
							costs. This makes us able to control our prices.
						</p>
					</>
				);

				break;
			case "Consultancy & Customer Dedicated":
				return (
					<>
						<h2>Project management</h2>
						<p>
							Based on our knowledge and over 40 years of experience, we are
							able to handle the entire material management on complex
							construction projects from concept to execution phase.
						</p>
					</>
				);

				break;
			case "Document Management":
				return (
					<>
						<p>
							We provide complete technical documentation and data dossiers in
							the contractual language to complete the supply. Documentation
							supplied, depending on client request, may consist of:
						</p>
						<ul>
							<li>Project Quality Plan</li>
							<li>Inspection & Test Plan</li>
							<li>Manufacturing and testing procedures</li>
							<li>Welding procedure specifications (WPS)</li>
							<li>Prequalification records (PQR)</li>
							<li>NDT Reports</li>
							<li>
								Material Test Certificate to DIN 50049 or EN 10204 type 2.1,
								2.2, 2.3, 3.1, 3.2, (3.1b, 3.1c) according to client
								requirements. Each QC dossier is supplied with the number of
								copies stipulated in the contract.
							</li>
						</ul>
					</>
				);

				break;

			case "Inspection and Testing":
				return (
					<>
						<p>
							UIP has established a system which ensures the final product is in
							line with the customer requirements. All the stages affecting the
							product quality has been fully monitored & controlled by equipped
							competent personnel. With our collaboration with qualified
							laboratories we can perform any of the followinq Inspections and
							tests on our supplied material:
						</p>
						<h4>Mechanical testings such as</h4>
						<ul>
							<li>Tensile Test</li>
							<li>Bending, Flattening, Elongation Test</li>
							<li>Hardness Test</li>
							<li>Charpy V Notch Impact Test</li>
						</ul>

						<h4>Chemical analysis of product</h4>
						<ul>
							<li>Metallographic Examination</li>
						</ul>

						<h4>Destructive testings for corrosion resitivity check</h4>
						<ul>
							<li>Huey, Strauss, Pitting, Crevice HIC, SSC, SWC etc.</li>
						</ul>

						<h4>Non destructive examinations</h4>
						<ul>
							<li>X-Ray, Fluorscopy</li>
							<li>Ultrasonic Examination</li>
							<li>Magnetic Particle Examination</li>
							<li>Dye Penetrant Testing</li>
							<li>Final Visual and Dimensional Examination</li>
						</ul>
					</>
				);

				break;
			default:
				break;
		}
	};
	return (
		<Modal
			show={show}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>
					<h1> {modalHeader} </h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modalBodyMaker()}</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ServicesModal;
