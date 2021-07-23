import React from "react";
import { useDispatch } from "react-redux";
import {
	isPopupVisibleOutsideClick,
	isVisiblePopup,
} from "../../redux/actionsCreators/actionsCrators";

export const Popup = ({ FragmentPopup }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="popup"
			data-popup="popup"
			onClick={e => dispatch(isPopupVisibleOutsideClick(e))}
		>
			<div className="popup-window">
				<div
					className="exit"
					onClick={() => {
						dispatch(isVisiblePopup(false));
					}}
				>
					&#10060;
				</div>

				<FragmentPopup />
			</div>
		</div>
	);
};
