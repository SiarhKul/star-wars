//todo использовать useCallback
import React, { useCallback, useEffect, useState } from "react";
import { getSpecificResours } from "../../API/getSpecificResours";
import { setClickedCardtoStore } from "../../redux/actionsCreators/actionsCrators";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const PopupListItem = ({ urls, name, path }) => {
	const [resources, setResources] = useState([]);
	const dispatch = useDispatch();

	const setClickedCardtoStoreMemo = useCallback(resours => {
		dispatch(setClickedCardtoStore(resours));
	}, []);

	useEffect(() => {
		(async urls => {
			const promises = urls.map(getSpecificResours);
			setResources(await Promise.all(promises));
		})(urls);
	}, []);

	return urls?.length === 0 ? (
		<span>N/A</span>
	) : (
		resources.map((resours, i) => {
			return (
				<li key={urls[i]} onClick={() => setClickedCardtoStoreMemo(resours)}>
					<Link to={path}>{resours[name]}</Link>
				</li>
			);
		})
	);
};
