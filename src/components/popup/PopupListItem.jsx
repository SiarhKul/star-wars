//todo использовать useCallback
import React, { useEffect, useState } from "react";
import { getSpecificResours } from "../../API/getSpecificResours";
import { Link } from "react-router-dom";

export const PopupListItem = ({ urls, name, path }) => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		(async urls => {
			const promises = urls.map(getSpecificResours);
			setResources(await Promise.all(promises));
		})(urls);
	}, []);

	return urls?.length === 0 ? (
		<span>N/A</span>
	) : (
		resources?.map((resours, i) => {
			return (
				<li key={urls[i]}>
					<Link
						to={{
							pathname: path,
							state: resours,
						}}
					>
						{resours[name]}
					</Link>
				</li>
			);
		})
	);
};
