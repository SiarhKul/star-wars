import React from "react";
import { useDispatch } from "react-redux";

export const ButtonLoadMore = ({ action }) => {
	const dispatch = useDispatch();

	return (
		<div className="btn-load-more_center">
			<button
				className="btn-load-more active"
				onClick={() => {
					dispatch({ type: action });
				}}
			>
				Load more
			</button>
		</div>
	);
};
