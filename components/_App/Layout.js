import React, { useState } from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Navbar from "./Navbar";

import FAB from "./FAB";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />

				<title>United Piping Solutions | Piping the World</title>
				<meta name="robots" content="index, follow" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta
					name="description"
					content="United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials."
				/>

				<meta
					name="og:title"
					property="og:title"
					content="United Piping Solutions | Piping the World"
				/>
				<meta
					name="twitter:card"
					content="United Piping Solutions | Piping the World"
				/>
				<link
					rel="canonical"
					href="https://united-piping-solutions.vercel.app/"
				></link>

				<meta name="mobile-web-app-capable" content="yes" />

				<meta name="apple-mobile-web-app-capable" content="yes" />

				<base target="_blank" />

				<meta
					name="description"
					property="description"
					itemProp="description"
					content="United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials."
				/>

				{/* Open Graph */}
				<meta
					name="og:title"
					property="og:title"
					content="United Piping Solutions | Piping the World"
				/>
				<meta
					name="og:description"
					property="og:description"
					content="United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials."
				/>

				<meta
					name="og:image"
					property="og:image"
					content="https://united-piping-solutions.vercel.app/ups-og-img.png"
					itemProp="image"
				/>
				<meta name="og:type" content="website" />
				<meta
					name="og:url"
					property="og:url"
					content="https://united-piping-solutions.vercel.app/"
				/>
				<meta
					property="og:image:secure_url"
					name="og:image:secure_url"
					content="https://united-piping-solutions.vercel.app/"
				/>
				<meta
					property="og:image:type"
					name="og:image:type"
					content="image/png"
				/>
				<meta property="og:image:width" name="og:image:width" content="1200" />
				<meta property="og:image:height" name="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					name="og:image:alt"
					content="United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials."
				/>
				<meta
					property="og:site_name"
					name="og:site_name"
					content="United Piping Solutions | Piping the World"
				/>
				<meta property="og:locale" name="og:locale" content="en_US" />
				<meta property="og:type" name="og:type" content="website" />
				<meta
					itemProp="name"
					content="United Piping Solutions (UPS) is the exclusive representative of World Class international producers of Industrial Piping materials."
				/>
			</Head>
			<Navbar />
			{children}

			<FAB />

			<GoTop scrollStepInPx="100" delayInMs="10.50" />
		</>
	);
};

export default Layout;
