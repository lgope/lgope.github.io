import React from "react";

const Button = ({ className, href, target = "_blank", children }) => {
	return (
		<a
			className={`custom_button ${className}`}
			href={href}
			target={target}
			rel="noreferrer"
		>
			{children}
		</a>
	);
};

export default Button;
