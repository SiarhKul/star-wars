import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

export const Spinner = () => {
	const override = css`
		width: 20px;
		height: 20px;
		border-color: red;
	`;
	return <ClipLoader css={override} />;
};
