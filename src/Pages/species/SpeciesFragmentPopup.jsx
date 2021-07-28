import React from "react";
import { useSelector } from "react-redux";
import PopupListItem from "../../components/popup/PopupListItem";
import { useLocation } from "react-router";
import { clickedCard } from "../../utils";

export const SpeciesFragmentPopup = () => {
	const { species } = useSelector(state => state.dataFromServer);
	const query = new URLSearchParams(useLocation().search);
	const paramField = query.get("selected");

	const card = clickedCard(species, paramField, "name");

	const {
		name,
		classification,
		designation,
		skin_colors,
		hair_colors,
		eye_colors,
		average_lifespan,
		language,
		people,
		films,
	} = card;

	return (
		<>
			<div className="name-wrapper">
				<span className="popup__name">{name}</span>
			</div>
			<div className="description-wrapper">
				<div className="description-person">
					<div className="description-appearance">
						<p className="description__heading">Appearance</p>
						<ul className="description-appearance__item">
							<li>Classification:{classification}</li>
							<li>Designation:{designation}</li>
							<li>Skin colors:{skin_colors}</li>
							<li>Hair colors:{hair_colors}</li>
							<li>Eye colors:{eye_colors}</li>
							<li>Average_lifespan:{average_lifespan}</li>
							<li>Language:{language}</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources">
						<div className="resources-heading">Residents:</div>
						<ul className="resources-list">
							<PopupListItem urls={people} name="name" path="people" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Films:</div>
						<ul className="resources-list">
							<PopupListItem urls={films} name="title" path="films" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
