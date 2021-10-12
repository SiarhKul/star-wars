import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSpecificResoursAll } from "../../API/getSpecificResours";
import { Spinner } from "../spinner/Spinner";

export const PopupListItem = ({ urls, name, path }) => {
	const [resources, setResources] = useState([]);
	useEffect(() => {
		let isCancelled = false;
		(async urls => {
			const resources = await getSpecificResoursAll(urls);
			if (!isCancelled) {
				setResources(resources);
			}
		})(urls);

		return () => (isCancelled = true);
	}, []);

	if (urls?.length === 0) {
		return <span>N/A</span>;
	}

	if (resources.length === 0) {
		return <Spinner />;
	} 
		return resources?.map((card, i) => (
			<li key={urls[i]}>
				<Link to={{ pathname: `/${path}/${card[name]}`, state: card }}>
					{card[name]}
				</Link>
			</li>
		));
	
};
