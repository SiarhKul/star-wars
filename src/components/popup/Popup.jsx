//todo использовать useCallback
//todo нужно ли тут useCallback тк мы не передаем в дочерний компонент
//todo к томуже у нас одни компонент где используется
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	matchPath,
	useHistory,
	useLocation,
	useParams,
	useRouteMatch,
	withRouter,
} from "react-router";
// import { isVisiblePopup } from "../../redux/actionsCreators/actionsCrators";
import { history } from "../../redux/reducers";

const Popup = ({ FragmentPopup, match }) => {
	// const dispatch = useDispatch();
	const { pathname } = history.location;
	const { id } = useParams();

	const pathRootPage = pathname.replace(`/${id}`, "");

	const returnToRootPath = () => {
		history.push(pathRootPage);
	};

	const isPopupVisibleOutSideClickMemo = useCallback(e => {
		if (e.target.dataset.popup === "popup") {
			returnToRootPath();
		}
	}, []);

	// const isVisiblePopupMemo = useCallback(() => {
	// 	dispatch(isVisiblePopup(false));
	// }, []);

	return (
		<div
			className="popup"
			data-popup="popup"
			onClick={e => isPopupVisibleOutSideClickMemo(e)}
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

export default withRouter(Popup);
