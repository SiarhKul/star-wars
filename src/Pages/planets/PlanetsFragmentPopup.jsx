import React from "react";
import { useSelector } from "react-redux";
import { PopupListItem } from "../../components/popup/PopupListItem";

export const PlanetsFragmentPopup = () => {
	const {
		name,
		rotation_period,
		diameter,
		climate,
		gravity,
		terrain,
		surface_water,
		population,
		residents,
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
							<li>Rotation period:{rotation_period}</li>
							<li>Period period:{rotation_period}</li>
							<li>Diameter:{diameter}</li>
							<li>Climate:{climate}</li>
							<li>Gravity:{gravity}</li>
							<li>Terrain:{terrain}</li>
							<li>Surface water:{surface_water}</li>
							<li>Population:{population}</li>
						</ul>
					</div>
				</div>

				<div className="description-resources">
					<div className="resources">
						<div className="resources-heading">Residents:</div>
						<ul className="resources-list">
							<PopupListItem urls={residents} name="name" path="" />
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
