import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IS_VISIBLE_POPUP } from "../../redux/actions/actions";

export const Popup = () => {
	const dispatch = useDispatch();
	const clickedCard = useSelector(state => state.app.clickedCard);
	console.log(clickedCard);

	return (
		<div className="popup">
			<div className="popup-window">
				<div
					className="exit"
					onClick={() => {
						dispatch({ type: IS_VISIBLE_POPUP, payload: false });
					}}
				>
					&#10060;
				</div>
				<div className="name-wrapper">
					<span className="popup__name">Name</span>
				</div>
				<div className="description-wrapper">
					<div className="description-person">
						<div className="description-appearance">
							<p className="description__heading">Appearance</p>
							<ul className="description-appearance__item">
								<li>Hair color:{"person?.hair_color"}</li>
								<li>Skin color:{"person?.skin_color"}</li>
								<li>Eye color: {"person?.eye_color"}</li>
								<li>Gender:{"person?.gender"}</li>
							</ul>
						</div>
						<div className="description-stats">
							<p className="description__heading">Stats</p>
							<ul className="description-stats__items">
								<li>Height:{"person?.height"} cm</li>
								<li>Mass:{"person?.mass"} kg</li>
							</ul>
						</div>
					</div>

					<div className="description-stats">
						<div className="stats-homeworld">
							<div className="stats-heading">Home word:</div>
							<ul className="stats-list">
								<li>
									<a href="https://swapi.dev/api/planets/1/">Tatooine</a>
								</li>
							</ul>
						</div>

						<div className="stats-films">
							<div className="stats-heading">Films:</div>
							<ul className="stats-list">
								<li>
									<a href="#">A New Hope</a>
								</li>
								<li>
									<a href="#">The Epipe Spike Back</a>
								</li>
								<li>
									<a href="#">Return of the Jedi</a>
								</li>
								<li>
									<a href="#">Revenge of the Sith</a>
								</li>
							</ul>
						</div>
						<div className="stats-vehicles">
							<div className="stats-heading">Vehicles:</div>
							<ul className="stats-list">
								<li>
									<a href="#">Snowsppeder</a>
								</li>
								<li>
									<a href="#">Imperial Speeder Bike</a>
								</li>
							</ul>
						</div>
						<div className="stats-starships">
							<span className="stats-heading">Starships:</span>
							<ul className="stats-list">
								<li>
									<a href="#">X-wing</a>
								</li>
								<li>
									<a href="#">Impearl shuttele</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
