import React from "react";

export const bodyCardPeople = ({ card }) => {
	return (
		<div className="body">
			<div className="body__text">Name:{card.name}</div>
			<div className="body__text">Birth year:{card?.birth_year}</div>
			<div className="body__text">Gender:{card?.gender}</div>
		</div>
	);
};
