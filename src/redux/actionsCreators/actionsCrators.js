import { IS_POPUP_LOADED, SET_CLICKED_CARD_TO_STORE } from "../actions/actions";

export const isVisiblePopup = trueOrFalse => {
	return { type: IS_POPUP_LOADED, payload: trueOrFalse };
};

export const isPopupVisibleOutsideClick = e => {
	if (e.target.dataset.popup === "popup") {
		return { type: IS_POPUP_LOADED, payload: false };
	}
};

export const setClickedCardtoStore = allInfoCard => {
	return {
		type: SET_CLICKED_CARD_TO_STORE,
		payload: allInfoCard,
	};
};
