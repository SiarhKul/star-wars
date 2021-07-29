//todo использовать useCallback
//todo нужно ли тут useCallback тк мы не передаем в дочерний компонент
//todo к томуже у нас одни компонент где используется
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { isVisiblePopup } from "../../redux/actionsCreators/actionsCrators";

export const Popup = ({ FragmentPopup }) => {
	const dispatch = useDispatch();

	const isPopupVisibleOutSideClickMemo = useCallback(e => {
		if (e.target.dataset.popup === "popup") {
			dispatch(isVisiblePopup(false));
		}
	}, []);

	const isVisiblePopupMemo = useCallback(() => {
		dispatch(isVisiblePopup(false));
	}, []);

	return (
		<div
			className="popup"
			data-popup="popup"
			onClick={e => isPopupVisibleOutSideClickMemo(e)}
		>
			<div className="popup-window">
				<div className="exit" onClick={isVisiblePopupMemo}>
					<button className="exit__btn"> &#10060;</button>
				</div>
				<FragmentPopup />
			</div>
		</div>
	);
};
