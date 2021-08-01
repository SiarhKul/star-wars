import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardSpecies } from "../../components/bodyCards/bodyCardSpecies";
import { Cards } from "../../components/card/Cards";
import Popup from "../../components/popup/Popup";
import { GET_MORE_SPECIES } from "../../redux/actions/actions";
import { history } from "../../redux/reducers";
import { SpeciesFragmentPopup } from "./SpeciesFragmentPopup";

export const Species = () => {
	const contenCards = useSelector(state => state.dataFromServer.species);
	const { isLoadedSpecies } = useSelector(state => state.loading);
	const { isVisiblePopup } = useSelector(state => state.loading);
	const { pathname } = history.location;
	return (
		<main>
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={bodyCardSpecies}
			/>
			{!isLoadedSpecies && <ButtonLoadMore action={GET_MORE_SPECIES} />}
			{isVisiblePopup && <Popup FragmentPopup={SpeciesFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
