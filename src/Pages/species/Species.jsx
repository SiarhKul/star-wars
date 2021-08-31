import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_SPECIES } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { BodyCardSpecies } from "../../components/bodyCards/BodyCardSpecies";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import {
	selectBrowserLocation,
	selectIsLoaded,
	selectSpeciesStore,
} from "../../redux/selectors/selectors";

export const Species = () => {
	const contenCards = useSelector(selectSpeciesStore);
	const { isLoadedSpecies } = useSelector(selectIsLoaded);
	const { pathname } = useSelector(selectBrowserLocation);

	return (
		<main>
			<Loader />
			<ToastContainer />
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={BodyCardSpecies}
			/>
			{!isLoadedSpecies && <ButtonLoadMore action={GET_MORE_SPECIES} />}
		</main>
	);
};
