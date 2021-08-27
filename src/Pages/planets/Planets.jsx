import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_PLANETS } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import {
	selectBrowserLocation,
	selectIsLoaded,
	selectPlanetsStore,
} from "../../redux/selectors/selectors";

export const Planets = () => {
	const contenCards = useSelector(selectPlanetsStore);
	const { isLoadedPlanets } = useSelector(selectIsLoaded);
	const { pathname } = useSelector(selectBrowserLocation);

	return (
		<main className="main-people">
			<Loader />
			<ToastContainer />
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={bodyCardPlanets}
			/>
			{!isLoadedPlanets && <ButtonLoadMore action={GET_MORE_PLANETS} />}
		</main>
	);
};
