import React from "react";
import error404 from "../../assets/404.png";

export const noFound = () => (
		<div className="wrapper-error404">
			<img className="wrapper-error404__img" src={error404} alt="error404" />
		</div>
	);
