import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardVehicles } from "../../components/bodyCards/bodyCardVehicles";
import { Cards } from "../../components/card/Cards";
import { Popup } from "../../components/popup/Popup";

import { GET_MORE_VEHICLES } from "../../redux/actions/actions";
import { VehiclesFragmentPopup } from "./VehiclesFragmentPopup";

export const Vehicles = () => {
	const contenCards = useSelector(state => state.app.vehicles);
	const { isLoadedVehicles } = useSelector(state => state.app);
	const { isVisiblePopup } = useSelector(state => state.app);

	return (
		<main>
			<Cards
				contenCards={contenCards}
				name="name"
				BodyComponent={bodyCardVehicles}
			/>
			{!isLoadedVehicles && <ButtonLoadMore action={GET_MORE_VEHICLES} />}
			{isVisiblePopup && <Popup FragmentPopup={VehiclesFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
