import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import PopupListItem from "../../components/popup/PopupListItem";
import { clickedCard } from "../../utils";

export const FilmsFragmentPopup = () => {
	const films = useSelector(state => state.dataFromServer.films);
	const query = new URLSearchParams(useLocation().search);
	const paramField = query.get("selected");
	const card = clickedCard(films, paramField, "title");
	const {
		title,
		episode_id,
		director,
		producer,
		release_date,
		characters,
		planets,
		vehicles,
		starships,
		species,
	} = card;

	return (
		<div className="popup-fragment">
			<div className="name-wrapper">
				<span className="popup__name">{title}</span>
			</div>
			<div className="description-wrapper">
				<div className="description-person">
					<div className="description-appearance">
						<p className="description__heading">Appearance</p>
						<ul className="description-appearance__item">
							<li>Episode:{episode_id}</li>
							<li>Director:{director}</li>
							<li>Producer:{producer}</li>
							<li>Release date:{release_date}</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources">
						<div className="resources-heading">Characters:</div>
						<ul className="resources-list">
							<PopupListItem urls={characters} name="name" path="people" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Planets:</div>
						<ul className="resources-list">
							<PopupListItem urls={planets} name="name" path="planets" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Vehicles:</div>
						<ul className="resources-list">
							<PopupListItem urls={vehicles} name="name" path="vehicles" />
						</ul>
					</div>

					<div className="resources">
						<span className="resources-heading">Starships:</span>
						<ul className="resources-list">
							<PopupListItem urls={starships} name="name" path="starships" />
						</ul>
					</div>
					<div className="resources">
						<span className="resources-heading">Species:</span>
						<ul className="resources-list">
							<PopupListItem urls={species} name="name" path="species" />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
