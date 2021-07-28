//todo использовать useCallback
//todo убрать мультиклик на мену
//todo создать 2 функции
//todo вернуть влево карточки

import React, { useCallback } from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";
import { isVisiblePopup } from "../../redux/actionsCreators/actionsCrators";

import { withRouter } from "react-router";

export const Cards = withRouter(
	({ name, path, contenCards, BodyComponent, history }) => {
		const dispatch = useDispatch();

		const getAbbreviationMemo = useCallback(
			cardName => getAbbreviation(cardName),
			[]
		);

		const isPopupVisibleMemo = useCallback(() => {
			dispatch(isVisiblePopup(true));
		}, []);

		const setUniqueQueryParam = uniqueQueryParam => {
			history.push({
				pathname: path,
				search: `?selected=${uniqueQueryParam}`,
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
									setUniqueQueryParam(card[name]);
									isPopupVisibleMemo();
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
	}
);
