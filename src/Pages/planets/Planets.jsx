import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { Popup } from "../../components/popup/Popup";
import { withCard } from "../../hoc/withCardPeople";
import { GET_MORE_PLANETS } from "../../redux/actions/actions";
import { PlanetsFragmentPopup } from "./PlanetsFragmentPopup";

const PlanetsCards = withCard(bodyCardPlanets);

export const Planets = () => {
	const contenCards = useSelector(state => state.app.planets);
	const isLoadedPlanets = useSelector(state => state.app.isLoadedPlanets);
	const isVisiblePopup = useSelector(state => state.app.isVisiblePopup);

	return (
		<main className="main-people">
			<PlanetsCards contenCards={contenCards} name="name" />
			{!isLoadedPlanets && <ButtonLoadMore action={GET_MORE_PLANETS} />}
			{isVisiblePopup && <Popup FragmentPopup={PlanetsFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
