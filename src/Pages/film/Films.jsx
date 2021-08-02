import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { Cards } from "../../components/card/Cards";
import { ToastContainer } from "react-toastify";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const Films = () => {
	const contenCards = useSelector(state => state.dataFromServer.films);
	const { pathname } = history.location;

	return (
		<main>
			<ToastContainer />
			<Cards
				name="title"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={bodyCardFilm}
			/>
		</main>
	);
};
