import React from "react";
import { useSelector } from "react-redux";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { withCard } from "../../hoc/withCardPeople";
import { ToastContainer } from "react-toastify";
import { Popup } from "../../components/popup/Popup";
import { FilmsFragmentPopup } from "./FilmsFragmentPopup";

const FilmsCard = withCard(bodyCardFilm);

export const Films = () => {
	const contenCards = useSelector(state => state.app.films);

	const { isVisiblePopup } = useSelector(state => state.app);
	return (
		<main>
			<FilmsCard contenCards={contenCards} name="title" />
			<ToastContainer />
			{isVisiblePopup && <Popup FragmentPopup={FilmsFragmentPopup} />}
		</main>
	);
};
