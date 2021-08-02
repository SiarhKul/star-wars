import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/card/Cards";
import { GET_MORE_SPECIES } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardSpecies } from "../../components/bodyCards/bodyCardSpecies";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const Species = () => {
	const contenCards = useSelector(state => state.dataFromServer.species);
	const { isLoadedSpecies } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main>
			<ToastContainer />
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={bodyCardSpecies}
			/>
			{!isLoadedSpecies && <ButtonLoadMore action={GET_MORE_SPECIES} />}
		</main>
	);
};
