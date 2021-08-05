import React, { useEffect, useState } from "react";
import { getSpecificResours } from "../../API/getSpecificResours";
import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";

export const PopupListItem = ({ urls, name, path }) => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		(async urls => {
			const promises = urls?.map(getSpecificResours);
			setResources(await Promise.all(promises));
		})(urls);
	}, []);

	if (urls?.length === 0) {
		return <span>N/A</span>;
	}

	if (resources.length === 0) {
		return <Spinner />;
	} else {
		return resources?.map((card, i) => (
			<li key={urls[i]}>
				<Link
					to={{
						pathname: `/${path}/${card[name]}`,
						state: card,
					}}
				>
					{card[name]}
				</Link>
			</li>
		));
	}
};
