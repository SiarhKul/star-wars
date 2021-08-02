//todo использовать useCallback
//todo убрать мультиклик на меню
//todo создать 2 функции
//todo вернуть влево карточки

import React, { useCallback } from "react";

import { getAbbreviation } from "../../utils";
import { history } from "../../redux/reducers";

export const Cards = ({ name, path, contenCards, BodyComponent }) => {
	const getAbbreviationMemo = useCallback(
		cardName => getAbbreviation(cardName),
		[]
	);

	const setUniqueQueryParam = card => {
		history.push({
			pathname: `${path}/${card[name]}`,
			state: card,
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
