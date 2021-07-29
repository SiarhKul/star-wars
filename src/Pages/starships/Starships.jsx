import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardStarships } from "../../components/bodyCards/bodyCardStarships";
import { Cards } from "../../components/card/Cards";
import { Popup } from "../../components/popup/Popup";
import { GET_MORE_STARSHIPS } from "../../redux/actions/actions";
import { StarshipsSpeciesPopup } from "./StarshipsSpeciesPopup";

export const Starships = () => {
	const contenCards = useSelector(state => state.dataFromServer.starships);
	const isLoadedStarships = useSelector(
		state => state.loading.isLoadedStarships
	);
	const { isVisiblePopup } = useSelector(state => state.loading);

	return (
		<main className="main-people">
			<Cards
				contenCards={contenCards}
				name="name"
				BodyComponent={bodyCardStarships}
			/>
			{!isLoadedStarships && <ButtonLoadMore action={GET_MORE_STARSHIPS} />}
			{isVisiblePopup && <Popup FragmentPopup={StarshipsSpeciesPopup} />}
			<ToastContainer />
		</main>
	);
};
