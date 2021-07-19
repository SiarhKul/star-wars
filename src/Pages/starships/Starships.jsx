import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ButtonLoadMore } from "../../components";
import { bodyCardStarships } from "../../components/bodyCards/bodyCardStarships";
import { withCard } from "../../hoc/withCardPeople";
import { GET_MORE_STARSHIPS } from "../../redux/actions/actions";

const StarhipsCard = withCard(bodyCardStarships);

export const Starships = () => {
	const contenCards = useSelector(state => state.app.starships);
	const isLoadedStarhips = useSelector(state => state.app.isLoadedStarships);
	return (
		<main className="main-people">
			<StarhipsCard contenCards={contenCards} name="name" />
			{!isLoadedStarhips && <ButtonLoadMore action={GET_MORE_STARSHIPS} />}
			<ToastContainer />
		</main>
	);
};
