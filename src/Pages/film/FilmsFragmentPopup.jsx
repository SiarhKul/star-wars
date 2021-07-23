import React from "react";
import { useSelector } from "react-redux";
import { PopupListItem } from "../../components/popup/PopupListItem";

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
	} = useSelector(state => state.app.clickedCard);

	return (
		<>
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
							<PopupListItem urls={characters} name="name" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Planets:</div>
						<ul className="resources-list">
							<PopupListItem urls={planets} name="name" />
						</ul>
					</div>

					<div className="resources">
						<div className="resources-heading">Vehicles:</div>
						<ul className="resources-list">
							<PopupListItem urls={vehicles} name="name" />
						</ul>
					</div>

					<div className="resources">
						<span className="resources-heading">Starships:</span>
						<ul className="resources-list">
							<PopupListItem urls={starships} name="name" />
						</ul>
					</div>
					<div className="resources">
						<span className="resources-heading">Species:</span>
						<ul className="resources-list">
							<PopupListItem urls={species} name="name" />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
