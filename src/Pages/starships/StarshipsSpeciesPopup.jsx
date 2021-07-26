import React from "react";
import { useSelector } from "react-redux";
import { PopupListItem } from "../../components/popup/PopupListItem";

export const StarshipsSpeciesPopup = () => {
	const {
		name,
		model,
		manufacturer,
		cost_in_credits,
		length,
		max_atmosphering_speed,
		cargo_capacity,
		consumables,
		hyperdrive_rating,
		MGLT,
		starship_class,
		pilots,
		films,
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
							<li>Model:{model}</li>
							<li>Manufacturer:{manufacturer}</li>
							<li>Cost in credits:{cost_in_credits}</li>
							<li>length:{length}</li>
							<li>Max atmosphering speed:{max_atmosphering_speed}</li>
							<li>Passengers:{cargo_capacity}</li>
							<li>Consumables:{consumables}</li>
							<li>Hyperdrive rating:{hyperdrive_rating}</li>
							<li>MGLT:{MGLT}</li>
							<li>Starship class:{starship_class}</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources">
						<div className="resources-heading">Pilots:</div>
						<ul className="resources-list">
							<PopupListItem urls={pilots} name="name" path="/" />
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
