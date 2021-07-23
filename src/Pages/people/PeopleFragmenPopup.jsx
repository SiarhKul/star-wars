import React from "react";
import { useSelector } from "react-redux";
import { PopupListItem } from "../../components/popup/PopupListItem";

export const PeopleFragmenPopup = () => {
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
	} = useSelector(state => state.app.clickedCard);

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
					<div className="resources-homeworld">
						<div className="resources-heading">Home word:</div>
						<ul className="resources-list">
							<PopupListItem urls={[homeworld]} name="name" />
						</ul>
					</div>

					<div className="resources-films">
						<div className="resources-heading">Films:</div>
						<ul className="resources-list">
							<PopupListItem urls={films} name="title" />
						</ul>
					</div>

					<div className="resources-vehicles">
						<div className="resources-heading">Vehicles:</div>
						<ul className="resources-list">
							<PopupListItem urls={vehicles} name="name" />
						</ul>
					</div>

					<div className="resources-starships">
						<span className="resources-heading">Starships:</span>
						<ul className="resources-list">
							<PopupListItem urls={starships} name="name" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
