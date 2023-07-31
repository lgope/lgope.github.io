import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/NavBar.jsx";
import Footer from "../components/common/Footer.jsx";
import Logo from "../components/common/Logo.jsx";
import Skill from "../components/skills/Skill.jsx";


import INFO from "../data/user";
import SEO from "../data/seo";
import mySkills from "../data/skills";

import "./styles/articles.css";

const Skills = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.skills.title}
						</div>

						<div className="subtitle articles-subtitle" dangerouslySetInnerHTML={{ __html: INFO.skills.description }} />

						<div className="articles-container">
							<div className="articles-wrapper">
								{mySkills.map((skill) => (
									<div
										className="articles-article"
										key={skill.title}
									>
										<Skill
											title={skill.title}
											data={skill.data}
										/>
									</div>
								))}
							</div>
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

export default Skills;
