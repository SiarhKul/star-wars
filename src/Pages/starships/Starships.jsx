import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardStarships } from "../../components/bodyCards/bodyCardStarships";
import { Popup } from "../../components/popup/Popup";
import { withCard } from "../../hoc/withCardPeople";
import { GET_MORE_STARSHIPS } from "../../redux/actions/actions";
import { StarshipsSpeciesPopup } from "./StarshipsSpeciesPopup";

const StarhipsCard = withCard(bodyCardStarships);

export const Starships = () => {
	const contenCards = useSelector(state => state.app.starships);
	const isLoadedStarhips = useSelector(state => state.app.isLoadedStarships);
	const { isVisiblePopup } = useSelector(state => state.app);

	return (
		<main className="main-people">
			<StarhipsCard contenCards={contenCards} name="name" />
			{!isLoadedStarhips && <ButtonLoadMore action={GET_MORE_STARSHIPS} />}
			{isVisiblePopup && <Popup FragmentPopup={StarshipsSpeciesPopup} />}
			<ToastContainer />
		</main>
	);
};
