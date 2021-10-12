import React from "react";

export const BodyCardVehicles = ({ card }) => (
		<div className="body">
			<div className="body__text">Name:{card?.name}</div>
			<div className="body__text">Model:{card?.model}</div>
			<div className="body__text">Crew:{card?.crew}</div>
		</div>
	);
