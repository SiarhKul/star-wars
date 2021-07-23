import {
	IS_VISIBLE_POPUP,
	SET_CLICKED_CARD_TO_STORE,
} from "../actions/actions";

export const isVisiblePopup = trueOrFalse => {
	return { type: IS_VISIBLE_POPUP, payload: trueOrFalse };
};

export const isPopupVisibleOutsideClick = e => {
	if (e.target.dataset.popup === "popup") {
		return { type: IS_VISIBLE_POPUP, payload: false };
	}
};

export const setClickedCardtoStore = allInfoCard => {
	return {
		type: SET_CLICKED_CARD_TO_STORE,
		payload: allInfoCard,
	};
};
