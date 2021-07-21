import React from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";

import {
	isVisiblePopup,
	setClickedCardtoStore,
} from "../../redux/actionsCreators/actionsCrators";

export const Card = ({
	card,
	name,
	allInfoCard,
	bodyComponent: BodyComponent,
}) => {
	const dispatch = useDispatch();

	return (
		<div className="card-wrapper">
			<div
				className="card"
				onClick={() => {
					dispatch(isVisiblePopup(true));
					dispatch(setClickedCardtoStore(allInfoCard));
				}}
			>
				<div className="avatar">
					<div className="avatar__abbr">{getAbbreviation(card[name])}</div>
				</div>
				<BodyComponent card={card} />
			</div>
		</div>
	);
};
