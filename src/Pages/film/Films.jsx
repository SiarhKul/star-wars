import React from "react";
import { useSelector } from "react-redux";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { ToastContainer } from "react-toastify";
import Popup from "../../components/popup/Popup";
import { FilmsFragmentPopup } from "./FilmsFragmentPopup";
import { Cards } from "../../components/card/Cards";
import { history } from "../../redux/reducers";

export const Films = () => {
	const contenCards = useSelector(state => state.dataFromServer.films);
	const { isVisiblePopup } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main>
			<Cards
				contenCards={contenCards}
				path={pathname}
				name="title"
				BodyComponent={bodyCardFilm}
			/>
			<ToastContainer />
			{isVisiblePopup && <Popup FragmentPopup={FilmsFragmentPopup} />}
		</main>
	);
};
