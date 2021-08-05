import React from "react";
import { PopupListItem } from "../../components/popup/PopupListItem";
import { history } from "../../redux/reducers";

export const FilmsFragmentPopup = () => {
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
	} = history.location?.state;

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
