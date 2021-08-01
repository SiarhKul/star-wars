//todo использовать useCallback
//todo убрать мультиклик на меню
//todo создать 2 функции
//todo вернуть влево карточки

import React, { useCallback } from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";
import { isVisiblePopup } from "../../redux/actionsCreators/actionsCrators";
import { history } from "../../redux/reducers";
// import { collapseToast } from "react-toastify";
// import { useParams } from "react-router";

export const Cards = ({ name, path, contenCards, BodyComponent }) => {
	console.log(path);

	// const dispatch = useDispatch();
	const getAbbreviationMemo = useCallback(
		cardName => getAbbreviation(cardName),
		[]
	);

	// const isPopupVisibleMemo = useCallback(() => {
	// 	dispatch(isVisiblePopup(true));
	// }, []);

	const setUniqueQueryParam = card => {
		console.log(`${path}/${card[name]}`);
		history.push({
			pathname: `${path}/${card[name]}`,
			state: card,
			// search: `?selected=${card[name]}`,
		});
	};

	return (
		<div className="cards-container">
			{contenCards.map(card => {
				return (
					<div className="card-wrapper" key={card[name]}>
						<div
							className="card"
							onClick={() => {
								setUniqueQueryParam(card);
								// isPopupVisibleMemo();
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
