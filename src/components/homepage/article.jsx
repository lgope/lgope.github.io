import React from "react";
import "./styles/article.css";

const Article = ({ type, icon, data }) => (
	<div className="homepage-article">
		<div className="homepage-article-content">
			<div className="homepage-article-type">
				{icon}
				{type}
			</div>
			<ul>
				{data.map((d, index) => (
					<li
						className="homepage_publication_details"
						key={index.toString()}
					>
						<div
							className="homepage-article-title"
							dangerouslySetInnerHTML={{
								__html: d.title,
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Article;
