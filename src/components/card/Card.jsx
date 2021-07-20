import React from "react";
import { getAbbreviation } from "../../utils";
import { useDispatch } from "react-redux";
import {
	IS_VISIBLE_POPUP,
	SET_CLICKED_CARD_TO_STORE,
} from "../../redux/actions/actions";

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
					dispatch({ type: IS_VISIBLE_POPUP, payload: true });
					dispatch({
						type: SET_CLICKED_CARD_TO_STORE,
						payload: allInfoCard,
					});
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
