import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardVehicles } from "../../components/bodyCards/bodyCardVehicles";
import { Popup } from "../../components/popup/Popup";

import { withCard } from "../../hoc/withCardPeople";
import { GET_MORE_VEHICLES } from "../../redux/actions/actions";
import { VehiclesFragmentPopup } from "./VehiclesFragmentPopup";

const VehiclesCards = withCard(bodyCardVehicles);

export const Vehicles = () => {
	const contenCards = useSelector(state => state.app.vehicles);
	const isLoadedVehicles = useSelector(state => state.app.isLoadedVehicles);
	const { isVisiblePopup } = useSelector(state => state.app);

	return (
		<main>
			<VehiclesCards contenCards={contenCards} name="name" />
			{!isLoadedVehicles && <ButtonLoadMore action={GET_MORE_VEHICLES} />}
			{isVisiblePopup && <Popup FragmentPopup={VehiclesFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
