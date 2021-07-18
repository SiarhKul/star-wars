import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardPlanets } from "../../components/bodyCards/bodyCardPlanets";
import { withCard } from "../../hoc/withCardPeople";

const PlanetsCards = withCard(bodyCardPlanets);

export const Planets = () => {
	const contenCards = useSelector(state => state.app.planets);

	return (
		<main className="main-people">
			<PlanetsCards contenCards={contenCards} name="name" />
			<ToastContainer />
			<ButtonLoadMore />
		</main>
	);
};
