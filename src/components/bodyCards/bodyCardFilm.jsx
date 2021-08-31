import React from "react";

export const BodyCardFilm = ({ card: { title, director, release_date } }) => {
	return (
		<div className="body">
			<div className="body__text">Name:{title}</div>
			<div className="body__text">Director:{director}</div>
			<div className="body__text">Release date:{release_date}</div>
		</div>
	);
};
