import React from "react";

export const bodyCardFilm = ({ card }) => {
	return (
		<div className="body">
			<div className="body__text">Name:{card.title}</div>
			<div className="body__text">Director:{card?.director}</div>
			<div className="body__text">Release date:{card?.release_date}</div>
		</div>
	);
};
