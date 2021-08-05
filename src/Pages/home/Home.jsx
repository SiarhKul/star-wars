import React from "react";
import logoStarWars from "../../assets/Star-Wars-Logo.png";
export const Home = () => {
	return (
		<div className="wrapper-logo">
			<img className="logo" src={logoStarWars} alt="log-sw" />
		</div>
	);
};
