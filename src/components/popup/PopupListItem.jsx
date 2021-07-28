//todo использовать useCallback
import React, { useCallback, useEffect, useState } from "react";
import { getSpecificResours } from "../../API/getSpecificResours";
import { Link, withRouter } from "react-router-dom";

const PopupListItem = ({ urls, name, path, match, location, history }) => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		(async urls => {
			const promises = urls.map(getSpecificResours);
			setResources(await Promise.all(promises));
		})(urls);
	}, []);

	const pushToMenuItem = uniqueQueryParam => {
		history.push({ pathname: path, search: `?selected=${uniqueQueryParam}` });
	};

	return urls?.length === 0 ? (
		<span>N/A</span>
	) : (
		resources?.map((resours, i) => {
			return (
				<li key={urls[i]}>
					<span onClick={() => pushToMenuItem(resours[name])}>
						{resours[name]}
					</span>
				</li>
			);
		})
	);
};

export default withRouter(PopupListItem);

// const PopupListItem = ({ urls, name, path, match, location, history }) => {
// 	console.log(match);
// 	console.log(location);
// 	console.log(history);

// 	const [resources, setResources] = useState([]);
// 	const dispatch = useDispatch();
// 	const withLink = withRouter(Link);
// const setClickedCardtoStoreMemo = useCallback(resours => {
// 	dispatch(setClickedCardtoStore(resours));
// }, []);

// const isVisiblePopupMemo = useCallback(() => {
// 	dispatch(isVisiblePopup(false));
// }, []);

// 	useEffect(() => {
// 		(async urls => {
// 			const promises = urls.map(getSpecificResours);
// 			setResources(await Promise.all(promises));
// 		})(urls);
// 	}, []);

// 	return urls?.length === 0 ? (
// 		<span>N/A</span>
// 	) : (
// 		resources?.map((resours, i) => {
// 			return (
// 				<li
// key={urls[i]} /* onClick={() => setClickedCardtoStoreMemo(resours)} */
// onClick={isVisiblePopupMemo}
// 					key={urls[i]}
// 				>
// 					<Link
// 						to={{
// 							pathname: path,
// 							state: { prevCardClicked: resours },
// 						}}
// 					>
// 						{resours[name]}
// 					</Link>
// 				</li>
// 			);
// 		})
// 	);
// };
