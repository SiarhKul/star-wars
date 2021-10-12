import React from "react";

export const BodyCardPlanets = ({ card }) => (
		<div className="body">
			<div className="body__text">Name:{card.name}</div>
			<div className="body__text">Population:{card.population}</div>
		</div>
	);
