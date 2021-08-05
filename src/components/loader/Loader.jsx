import React from "react";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";

export const Loader = () => {
	const { isDataLoadedFromServer } = useSelector(state => state.loading);
	const override = css`
		width: 100%;
		height: 5px;
		background-color: red;
	`;
	return (
		<div className="spinner">
			{isDataLoadedFromServer && <BarLoader css={override} />}
		</div>
	);
};
