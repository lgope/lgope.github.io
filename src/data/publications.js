import React from "react";
import ReactDomServer from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faFileLines,
	faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

const journal = {
	type: "Journal Articles",
	icon: (
		<FontAwesomeIcon
			style={{
				fontSize: "15px",
				color: "8F0D0D",
				paddingRight: "9px",
			}}
			icon={faFileLines}
		/>
	),
	data: [
		{
			title:
				"Rahman, S.S.M.M., <strong>Gope, L.</strong>, Islam, T., Alazab, M. (2021). IntAnti-Phish: An Intelligent Anti-Phishing Framework Using Backpropagation Neural Network. In: Maleh, Y., Shojafar, M., Alazab, M., Baddi, Y. (eds) Machine Intelligence and Big Data Analytics for Cybersecurity Applications. Studies in Computational Intelligence, vol 919. Springer, Cham. " +
				ReactDomServer.renderToString(
					<a
						className="article_more_profile_details"
						href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xLlTnLAAAAAJ&citation_for_view=xLlTnLAAAAAJ:u5HHmVD_uO8C"
						rel="noreferrer"
						target="_blank"
					>
						More Details{" "}
						<FontAwesomeIcon
							style={{ fontSize: "10px" }}
							icon={faChevronRight}
						/>
					</a>
				),
		},
	],
};

const conference = {
	type: "Conference Proceedings",
	icon: (
		<FontAwesomeIcon
			style={{
				fontSize: "15px",
				color: "8F0D0D",
				paddingRight: "9px",
			}}
			icon={faUsersLine}
		/>
	),
	data: [
		{
			title: "Coming up....",
		},
	],
};

const myPublications = [journal, conference];

export default myPublications;
