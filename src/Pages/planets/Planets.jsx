import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_PLANETS } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";

export const Planets = () => {
	const contenCards = useSelector(state => state.dataFromServer.planets);
	const { isLoadedPlanets } = useSelector(state => state.loading);
	const { pathname } = history.location;
	// const { pathname } = useSelector(state => state.router.location);
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
