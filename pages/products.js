import React, { useState, useEffect } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import ProductsModal from "@/components/Common/ProductModal";

const Products = () => {
	const [modalHeader, setModalHeader] = useState("");

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		return () => {
			setModalHeader("");
		};
	}, []);

	return (
		<>
			<PageBanner pageTitle="Products" />

			<div className="ml-services-area ptb-80">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-6">
							<div className="single-ml-services-box">
								<div className="image">
									<img
										onClick={() => {
											setModalHeader("Pipes");
											handleShow();
										}}
										src="/images/products-1.jpg"
										alt="Pipes - United International Piping"
									/>
								</div>
								<h3>
									<a
										onClick={() => {
											setModalHeader("Pipes");
											handleShow();
										}}
										className="product-title"
									>
										Pipes
									</a>
								</h3>
								<p>
									Material of Construction of the products range from Plain
									Carbon Steels to High Alloy....
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="single-ml-services-box">
								<div className="image">
									<img
										onClick={() => {
											setModalHeader("Flanges");
											handleShow();
										}}
										src="/images/products-2.jpg"
										alt="Flanges - United International Piping"
									/>
								</div>
								<h3>
									<a
										onClick={() => {
											setModalHeader("Flanges");
											handleShow();
										}}
										className="product-title"
									>
										Flanges
									</a>
								</h3>
								<p>
									UIP is constantly expanding its product range to maintain the
									standards of global Piping Industry.{" "}
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="single-ml-services-box">
								<div className="image">
									<img
										onClick={() => {
											setModalHeader("Wrought & Forged Steel Fittings");
											handleShow();
										}}
										src="/images/products-3.jpg"
										alt="Fittings - United International Piping"
									/>
								</div>
								<h3>
									<a
										onClick={() => {
											setModalHeader("Wrought & Forged Steel Fittings");
											handleShow();
										}}
										className="product-title"
									>
										Fittings
									</a>
								</h3>
								<p>
									All materials/products confirms to international standards
									such as API, ASTM, ASME, ISO, DIN & EN.
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="single-ml-services-box">
								<div className="image">
									<img
										onClick={() => {
											setModalHeader("Valves");
											handleShow();
										}}
										src="/images/products-4.jpg"
										alt="Valves - United International Piping"
									/>
								</div>
								<h3>
									<a
										onClick={() => {
											setModalHeader("Valves");
											handleShow();
										}}
										className="product-title"
									>
										Valves
									</a>
								</h3>
								<p>
									All materials/products confirms to international standards
									such as API, ASTM, ASME, ISO, DIN & EN.
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6">
							<div className="single-ml-services-box">
								<div className="image">
									<img
										onClick={() => {
											setModalHeader("Stud Bolts");
											handleShow();
										}}
										src="/images/products-5.jpg"
										alt="Stud Bolts - United International Piping"
									/>
								</div>
								<h3>
									<a
										onClick={() => {
											setModalHeader("Stud Bolts");
											handleShow();
										}}
										className="product-title"
									>
										Stud Bolts
									</a>
								</h3>
								<p>
									All materials/products confirms to international standards
									such as API, ASTM, ASME, ISO, DIN & EN.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Shape Images */}
				{/* <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div> */}
			</div>
			<ProductsModal
				show={show}
				handleClose={handleClose}
				modalHeader={modalHeader}
			/>
			<Footer />
		</>
	);
};

export default Products;
