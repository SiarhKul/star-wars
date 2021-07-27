//todo использовать useCallback
//todo убрать мультиклик на мену
import React, { useCallback } from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";
import {
	isVisiblePopup,
	setClickedCardtoStore,
} from "../../redux/actionsCreators/actionsCrators";

export const Cards = ({ contenCards, name, BodyComponent }) => {
	const dispatch = useDispatch();

	const getAbbreviationMemo = useCallback(
		cardName => getAbbreviation(cardName),
		[]
	);

	const isPopupVisibleMemo = useCallback(() => {
		dispatch(isVisiblePopup(true));
	}, []);

	const setClickedCardtoStoreMemo = useCallback(card => {
		dispatch(setClickedCardtoStore(card));
	}, []);

	return (
		<div className="cards-container">
			{contenCards.map(card => {
				return (
					<div className="card-wrapper" key={card[name]}>
						<div
							className="card"
							onClick={() => {
								isPopupVisibleMemo();
								setClickedCardtoStoreMemo(card);
							}}
						>
							<div className="avatar">
								<div className="avatar__abbr">
									{getAbbreviationMemo(card[name])}
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
