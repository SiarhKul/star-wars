import React from "react";
import { PopupListItem } from "../../components/popup/PopupListItem";

import { history } from "../../redux/reducers";
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
	} = history.location?.state;

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
							<li>Average lifespan:{average_lifespan}</li>
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
