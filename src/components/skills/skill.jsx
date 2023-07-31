import React from "react";
import "./style/skill.css";

const Skill = (props) => {
	const { title, data } = props;

	return (
		<div className="article">
			<div className="article-right-side">
				<div className="article-title">{title}</div>

				<ul className="skill-list">
					{data.map((d) => (
						<li index={d}>
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
	);
};

export default Skill;
