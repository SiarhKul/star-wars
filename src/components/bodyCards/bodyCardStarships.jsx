import React from "react";

export const BodyCardStarships = ({ card }) => {
	return (
		<div className="body">
			<div className="body__text">Name:{card.name}</div>
			<div className="body__text">Cost:{card.cost_in_credits}</div>
			<div className="body__text">Passangers:{card.passengers}</div>
		</div>
	);
};
