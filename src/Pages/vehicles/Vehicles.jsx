import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardVehicles } from "../../components/bodyCards/bodyCardVehicles";
import { Cards } from "../../components/cards/Cards";

import { GET_MORE_VEHICLES } from "../../redux/actions/actions";
import { history } from "../../redux/reducers";

export const Vehicles = () => {
	const contenCards = useSelector(state => state.dataFromServer.vehicles);
	const { isLoadedVehicles } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main>
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={bodyCardVehicles}
			/>
			{!isLoadedVehicles && <ButtonLoadMore action={GET_MORE_VEHICLES} />}
		</main>
	);
};
