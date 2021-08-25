import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { Cards } from "../../components/cards/Cards";
import { ToastContainer } from "react-toastify";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import { history } from "../../redux/reducers";

export const Films = () => {
	const contenCards = useSelector(state => state.dataFromServer.films);
	const { pathname } = history.location;

	return (
		<main>
			<Loader />
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
