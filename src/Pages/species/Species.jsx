import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardSpecies } from "../../components/bodyCards/bodyCardSpecies";
import { Cards } from "../../components/card/Cards";
import { Popup } from "../../components/popup/Popup";
import { GET_MORE_SPECIES } from "../../redux/actions/actions";
import { SpeciesFragmentPopup } from "./SpeciesFragmentPopup";

export const Species = () => {
	const contenCards = useSelector(state => state.app.species);
	const isLoadedSpecies = useSelector(state => state.app.isLoadedSpecies);
	const { isVisiblePopup } = useSelector(state => state.app);
	return (
		<main>
			<Cards
				contenCards={contenCards}
				name="name"
				BodyComponent={bodyCardSpecies}
			/>
			{!isLoadedSpecies && <ButtonLoadMore action={GET_MORE_SPECIES} />}
			{isVisiblePopup && <Popup FragmentPopup={SpeciesFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
