//todo использовать useCallback
//todo нужно ли тут useCallback тк мы не передаем в дочерний компонент
//todo к томуже у нас одни компонент где используется
import React, { useCallback } from "react";
import { useParams, withRouter } from "react-router";
import { history } from "../../redux/reducers";

export const Popup = ({ FragmentPopup }) => {
	const { pathname } = history.location;
	const { id } = useParams();
	const pathRootPage = pathname.replace(`/${id}`, "");

	const returnToRootPath = useCallback(() => {
		history.push(pathRootPage);
	}, []);

	const isPopupVisibleOutSideClickMemo = useCallback(e => {
		if (e.target.dataset.popup === "popup") {
			returnToRootPath();
		}
	}, []);

	return (
		<div
			className="popup"
			data-popup="popup"
			onClick={isPopupVisibleOutSideClickMemo}
		>
			<div className="popup-window">
				<div className="exit" onClick={returnToRootPath}>
					<button className="exit__btn"> &#10060;</button>
				</div>
				<FragmentPopup />
			</div>
		</div>
	);
};
