import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import PopupListItem from "../../components/popup/PopupListItem";
import { clickedCard } from "../../utils";

export const PeopleFragmenPopup = () => {
	const people = useSelector(state => state.dataFromServer.people);

	const query = new URLSearchParams(useLocation().search);
	const paramField = query.get("selected");

	const card = clickedCard(people, paramField, "name");

	const {
		name,
		hair_color,
		skin_color,
		eye_color,
		gender,
		height,
		mass,
		homeworld,
		films,
		vehicles,
		starships,
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
							<li>Hair color:{hair_color}</li>
							<li>Skin color:{skin_color}</li>
							<li>Eye color: {eye_color}</li>
							<li>Gender:{gender}</li>
						</ul>
					</div>

					<div className="description-stats">
						<p className="description__heading">Stats</p>
						<ul className="description-stats__items">
							<li>Height:{height} cm</li>
							<li>Mass:{mass} kg</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources resources_no-list-type">
						<div className="resources-heading">Home word:</div>
						<ul className="resources-list">
							<PopupListItem urls={[homeworld]} name="name" path="planets" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Films:</div>
						<ul className="resources-list">
							<PopupListItem urls={films} name="title" path="films" />
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
				</div>
			</div>
		</>
	);
};
