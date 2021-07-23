import React, { useEffect, useState } from "react";
import { getSpecificResours } from "../../API/getSpecificResours";

export const PopupListItem = ({ urls, name }) => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		(async urls => {
			const promises = urls.map(getSpecificResours);
			const res = await Promise.all(promises);
			setResources(res);
		})(urls);
	}, []);

	return urls.length === 0 ? (
		<span>N/A</span>
	) : (
		resources.map((resours, i) => {
			return (
				<li key={urls[i]}>
					<a href={urls[i]}>{resours[name]}</a>
				</li>
			);
		})
	);
};
