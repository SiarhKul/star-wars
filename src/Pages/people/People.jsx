import React from "react";
import { useSelector } from "react-redux";
import { ButtonLoadMore } from "../../components";
import { withCard } from "../../hoc/withCardPeople";
import { bodyCardPeople } from "../../components/bodyCards/bodyCardPeople";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";
import { Popup } from "../../components/popup/Popup";
import { PeopleFragmenPopup } from "./PeopleFragmenPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PeopleCards = withCard(bodyCardPeople);

export const People = () => {
	const contenCards = useSelector(state => state.app.people);
	const { isVisiblePopup } = useSelector(state => state.app);
	const isLoaded = useSelector(state => state.app.isLoaded);

	return (
		<main className="main-people">
			<ToastContainer />
			<PeopleCards contenCards={contenCards} name="name" />
			{!isLoaded && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
			{isVisiblePopup && <Popup FragmentPopup={PeopleFragmenPopup} />}
		</main>
	);
};
