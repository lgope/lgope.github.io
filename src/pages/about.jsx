import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Logo from "../components/common/Logo.jsx";
import Socials from "../components/about/Socials.jsx";

import INFO from "../data/user.js";
import SEO from "../data/seo.js";

import "./styles/about.css";
import Education from "../components/about/Education.jsx";
import Button from "../components/common/Button.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="about-education">
									<Education />
								</div>

								<div className="about-resume">
									<p>To know me more 👉🏻</p>
									<Button
										href={
											"https://github.com/lgope/lgope.github.io/files/13234661/lgopeResume.pdf"
										}
									>
										🌈 Download CV &nbsp;
										<FontAwesomeIcon
											style={{
												fontSize: "12px",
												// color: "8F0D0D",
												paddingRight: "9px",
											}}
											icon={faDownload}
										/>
									</Button>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about_pic.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
