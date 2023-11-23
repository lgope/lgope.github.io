import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a
					href={INFO.socials.github}
					target="_blank"
					rel="noreferrer"
					title="GitHub"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">GitHub</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.leetcode}
					target="_blank"
					rel="noreferrer"
					title="LeetCode"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faCode}
							className="social-icon"
						/>
					</div>
					<div className="social-text">LeetCode</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.google_scholar}
					target="_blank"
					rel="noreferrer"
					title="Google Scholar"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGoogle}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Google Scholer</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.twitter}
					target="_blank"
					rel="noreferrer"
					title="Twitter"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Twitter</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
					title="LinkedIn"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">LinkedIn</div>
				</a>
			</div>

			{/* <div className="social">
				<a
					href={INFO.socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faInstagram}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Instagram</div>
				</a>
			</div> */}

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
						title="Email"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
