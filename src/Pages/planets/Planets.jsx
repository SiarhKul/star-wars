import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { Cards } from "../../components/card/Cards";
import Popup from "../../components/popup/Popup";
import { GET_MORE_PLANETS } from "../../redux/actions/actions";
import { PlanetsFragmentPopup } from "./PlanetsFragmentPopup";
import { history } from "../../redux/reducers";

export const Planets = () => {
	const contenCards = useSelector(state => state.dataFromServer.planets);
	const { isLoadedPlanets } = useSelector(state => state.loading);
	const { isVisiblePopup } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main className="main-people">
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={bodyCardPlanets}
			/>

			{!isLoadedPlanets && <ButtonLoadMore action={GET_MORE_PLANETS} />}
			{isVisiblePopup && <Popup FragmentPopup={PlanetsFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
