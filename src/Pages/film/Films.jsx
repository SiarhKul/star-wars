import React from "react";
import { useSelector } from "react-redux";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { ToastContainer } from "react-toastify";
import { Popup } from "../../components/popup/Popup";
import { FilmsFragmentPopup } from "./FilmsFragmentPopup";
import { Cards } from "../../components/card/Cards";

export const Films = () => {
	const contenCards = useSelector(state => state.app.films);

	const { isVisiblePopup } = useSelector(state => state.app);
	return (
		<main>
			<Cards
				contenCards={contenCards}
				name="title"
				BodyComponent={bodyCardFilm}
			/>
			<ToastContainer />
			{isVisiblePopup && <Popup FragmentPopup={FilmsFragmentPopup} />}
		</main>
	);
};
