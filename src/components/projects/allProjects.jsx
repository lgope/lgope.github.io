import React from "react";

import Project from "./Project.jsx";

import INFO from "../../data/user.js";

import "./styles/allProjects.css";

const AllProjects = () => (
	<div className="all-projects-container">
		{INFO.projects.map((project, index) => (
			<div className="all-projects-project" key={index}>
				<Project
					logo={project.logo}
					title={project.title}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
				/>
			</div>
		))}
	</div>
);

export default AllProjects;
