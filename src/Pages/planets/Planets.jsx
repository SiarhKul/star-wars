import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { Cards } from "../../components/card/Cards";
import { Popup } from "../../components/popup/Popup";
import { GET_MORE_PLANETS } from "../../redux/actions/actions";
import { PlanetsFragmentPopup } from "./PlanetsFragmentPopup";

export const Planets = () => {
	const contenCards = useSelector(state => state.app.planets);
	const isLoadedPlanets = useSelector(state => state.app.isLoadedPlanets);
	const isVisiblePopup = useSelector(state => state.app.isVisiblePopup);

	return (
		<main className="main-people">
			<Cards
				contenCards={contenCards}
				name="name"
				BodyComponent={bodyCardPlanets}
			/>

			{!isLoadedPlanets && <ButtonLoadMore action={GET_MORE_PLANETS} />}
			{isVisiblePopup && <Popup FragmentPopup={PlanetsFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
