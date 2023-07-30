import React from "react";
import "./style/article.css";

const Article = (props) => {
	const { type, icon, data } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-right-side">
					<div className="article-title">
						{icon}
						{type}
					</div>

					<ul className="publication-list">
						{data.map((d, index) => (
							<li index={index.toString()}>
								<div
									className="article-description"
									dangerouslySetInnerHTML={{
										__html: d.title,
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

export default Article;
