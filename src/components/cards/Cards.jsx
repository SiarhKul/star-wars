//todo использовать useCallback
//todo убрать мультиклик на меню
//todo создать 2 функции
//todo вернуть влево карточки

import React, { useCallback } from "react";

import { history } from "../../redux/reducers";
import { Card } from "../card/Card";

export const Cards = ({ name, path, contenCards, BodyComponent }) => {
	const setUniqueQueryParam = useCallback(card => {
		history.push(`${path}/${card[name]}`, card);
	}, []);

	return (
		<div className="cards-container">
			{contenCards.map(card => (
				<Card
					onUniqueQueryParam={setUniqueQueryParam}
					key={card[name]}
					uniqueName={card[name]}
					card={card}
					path={path}
					BodyComponent={BodyComponent}
				/>
			))}
		</div>
	);
};
