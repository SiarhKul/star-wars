import React from "react";

export const BodyCardSpecies = ({ card }) => {
	return (
		<div className="body">
			<div className="body__text">Name:{card.name}</div>
			<div className="body__text">Language:{card.language}</div>
		</div>
	);
};
