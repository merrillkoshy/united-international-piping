import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import * as Icon from "react-feather";

const Navbar = () => {
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("header");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
		window.scrollTo(0, 0);
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<header
			id="header"
			className="headroom navbar-color-white navbar-style-four"
		>
			<div className="startp-nav">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light">
						<Link href="/">
							<a onClick={toggleNavbar} className="navbar-brand">
								<img src="/images/logo-white.png" alt="logo" />
							</a>
						</Link>

						<button
							onClick={toggleNavbar}
							className={classTwo}
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="icon-bar top-bar"></span>
							<span className="icon-bar middle-bar"></span>
							<span className="icon-bar bottom-bar"></span>
						</button>

						<div className={classOne} id="navbarSupportedContent">
							<ul className="navbar-nav ms-auto">
								<li className="nav-item">
									<Link href="/" activeClassName="active">
										<a onClick={toggleNavbar} className="nav-link">
											Home
										</a>
									</Link>
								</li>

								<li className="nav-item">
									<a
										onClick={(e) => e.preventDefault()}
										onClick={toggleNavbar}
										className="nav-link"
									>
										About <Icon.ChevronDown />
									</a>
									<ul className="dropdown-menu">
										<li className="nav-item">
											<Link href="/about-us" activeClassName="active">
												<a onClick={toggleNavbar} className="nav-link">
													About UPS
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/ups-advantage">
												<a onClick={toggleNavbar} className="nav-link">
													UPS Advantage
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/message-from-md" activeClassName="active">
												<a onClick={toggleNavbar} className="nav-link">
													Message from Managing Director
												</a>
											</Link>
										</li>

										<li className="nav-item">
											<Link href="/message-from-ed" activeClassName="active">
												<a onClick={toggleNavbar} className="nav-link">
													Message from Executive Director
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link href="/quality">
												<a onClick={toggleNavbar} className="nav-link">
													Quality
												</a>
											</Link>
										</li>
									</ul>
								</li>

								<li className="nav-item">
									<Link href="/solutions">
										<a onClick={toggleNavbar} className="nav-link">
											Solutions
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/fabrication">
										<a onClick={toggleNavbar} className="nav-link">
											Fabrication
										</a>
									</Link>
								</li>

								<li className="nav-item">
									<Link href="/products">
										<a onClick={toggleNavbar} className="nav-link">
											Products
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/services">
										<a onClick={toggleNavbar} className="nav-link">
											Services
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/gallery">
										<a onClick={toggleNavbar} className="nav-link">
											Gallery
										</a>
									</Link>
								</li>

								<li className="nav-item">
									<Link href="/contact" activeClassName="active">
										<a onClick={toggleNavbar} className="nav-link">
											Contact
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
