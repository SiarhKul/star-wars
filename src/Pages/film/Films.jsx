import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Cards } from "../../components/cards/Cards";
import { BodyCardFilm } from "../../components/bodyCards/bodyCardFilm";
import { Loader } from "../../components/loader/Loader";
import { history } from "../../redux/reducers";
import { selectFilmsStore } from "../../redux/selectors/selectors";

export const Films = () => {
	const contenCards = useSelector(selectFilmsStore);
	const { pathname } = history.location;

	return (
		<main>
			<Loader />
			<ToastContainer />
			<Cards
				name="title"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={BodyCardFilm}
			/>
		</main>
	);
};
