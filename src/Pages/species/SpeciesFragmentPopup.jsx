import React from "react";
import { useSelector } from "react-redux";
import { PopupListItem } from "../../components/popup/PopupListItem";

export const SpeciesFragmentPopup = () => {
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
					<div className="resources-homeworld">
						<div className="resources-heading">Home word:</div>
						<ul className="resources-list">
							<PopupListItem urls={people} name="name" />
						</ul>
					</div>

					<div className="resources-films">
						<div className="resources-heading">Films:</div>
						<ul className="resources-list">
							<PopupListItem urls={films} name="title" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
