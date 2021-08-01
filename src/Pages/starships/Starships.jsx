import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardStarships } from "../../components/bodyCards/bodyCardStarships";
import { Cards } from "../../components/card/Cards";
import Popup from "../../components/popup/Popup";
import { GET_MORE_STARSHIPS } from "../../redux/actions/actions";
import { history } from "../../redux/reducers";
import { StarshipsFragmentPopup } from "./StarshipsFragmentPopup";

export const Starships = () => {
	const contenCards = useSelector(state => state.dataFromServer.starships);
	const isLoadedStarships = useSelector(
		state => state.loading.isLoadedStarships
	);
	const { isVisiblePopup } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main className="main-people">
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="name"
				BodyComponent={bodyCardStarships}
			/>
			{!isLoadedStarships && <ButtonLoadMore action={GET_MORE_STARSHIPS} />}
			{isVisiblePopup && <Popup FragmentPopup={StarshipsFragmentPopup} />}
			<ToastContainer />
		</main>
	);
};
