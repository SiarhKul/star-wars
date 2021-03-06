import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { BodyCardVehicles } from "../../components/bodyCards/BodyCardVehicles";
import { Cards } from "../../components/cards/Cards";

import { GET_MORE_VEHICLES } from "../../redux/actions/actions";
import { history } from "../../redux/reducers";
import { Loader } from "../../components/loader/Loader";

export const Vehicles = () => {
	const contenCards = useSelector(state => state.dataFromServer.vehicles);
	const { isLoadedVehicles } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main>
			<Loader />
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={BodyCardVehicles}
			/>
			{!isLoadedVehicles && <ButtonLoadMore action={GET_MORE_VEHICLES} />}
		</main>
	);
};
