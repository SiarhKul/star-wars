import React from "react";
import { useSelector } from "react-redux";
import PopupListItem from "../../components/popup/PopupListItem";
import { useLocation } from "react-router";
import { clickedCard } from "../../utils";

export const VehiclesFragmentPopup = () => {
	const vehicles = useSelector(state => state.dataFromServer.vehicles);
	console.log(vehicles);
	const query = new URLSearchParams(useLocation().search);
	const paramField = query.get("selected");

	const card = clickedCard(vehicles, paramField, "name");
	const {
		name,
		model,
		momanufacturerdel,
		cost_in_credits,
		length,
		max_atmosphering_speed,
		crew,
		passengers,
		cargo_capacity,
		consumables,
		vehicle_class,
		films,
		pilots,
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
							<li>Model:{model}</li>
							<li>Manufacturer:{momanufacturerdel}</li>
							<li>Cost in credits:{cost_in_credits}</li>
							<li>Length:{length}</li>
							<li>Max atmosphering speed:{max_atmosphering_speed}</li>
							<li>Crew:{crew}</li>
							<li>Passengers:{passengers}</li>
							<li>Cargo capacity:{cargo_capacity}</li>
							<li>Consumables:{consumables}</li>
							<li>Vehicle_class:{vehicle_class}</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources">
						<div className="resources-heading">Films:</div>
						<ul className="resources-list">
							<PopupListItem urls={films} name="title" path="films" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Pilots:</div>
						<ul className="resources-list">
							<PopupListItem urls={pilots} name="name" path="people" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
