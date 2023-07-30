import React from "react";
import "./style/skill.css";

const Skill = (props) => {
	const { title, data } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-right-side">
					<div className="article-title">
						{title}
					</div>

					<ul className="skill-list">
						{data.map((d, index) => (
							<li index={index.toString()}>
								<div
									className="skill-name"
									dangerouslySetInnerHTML={{
										__html: d,
									}}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skill;
