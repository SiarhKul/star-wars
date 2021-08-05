import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_STARSHIPS } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardStarships } from "../../components/bodyCards/bodyCardStarships";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";

export const Starships = () => {
	const contenCards = useSelector(state => state.dataFromServer.starships);
	const { isLoadedStarships } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main className="main-people">
			<Loader />
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={bodyCardStarships}
			/>
			{!isLoadedStarships && <ButtonLoadMore action={GET_MORE_STARSHIPS} />}
		</main>
	);
};
