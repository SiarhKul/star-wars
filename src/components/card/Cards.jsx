//todo испльзовать useCallback
//todo убрать мультиклик на мену
import React from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";
import {
	isVisiblePopup,
	setClickedCardtoStore,
} from "../../redux/actionsCreators/actionsCrators";

export const Cards = ({ contenCards, name, BodyComponent }) => {
	const dispatch = useDispatch();

	return (
		<div className="cards-container">
			{contenCards.map((card, i) => {
				return (
					<div className="card-wrapper" key={card[name]}>
						<div
							className="card"
							onClick={() => {
								dispatch(isVisiblePopup(true));
								dispatch(setClickedCardtoStore(contenCards[i]));
							}}
						>
							<div className="avatar">
								<div className="avatar__abbr">
									{getAbbreviation(card[name])}
								</div>
							</div>
							<BodyComponent card={card} />
						</div>
					</div>
				);
			})}
		</div>
	);
};
