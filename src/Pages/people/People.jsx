import React from "react";
import { useSelector } from "react-redux";
import { ButtonLoadMore } from "../../components";
import { bodyCardPeople } from "../../components/bodyCards/bodyCardPeople";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";
import { Popup } from "../../components/popup/Popup";
import { PeopleFragmenPopup } from "./PeopleFragmenPopup";
import { ToastContainer } from "react-toastify";
import { Cards } from "../../components/card/Cards";
import "react-toastify/dist/ReactToastify.css";

export const People = () => {
	const contenCards = useSelector(state => state.dataFromServer.people);
	const { isVisiblePopup } = useSelector(state => state.loading);
	const { isLoaded } = useSelector(state => state.loading);

	return (
		<main className="main-people">
			<ToastContainer />
			<Cards
				contenCards={contenCards}
				name="name"
				BodyComponent={bodyCardPeople}
			/>
			{!isLoaded && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
			{isVisiblePopup && <Popup FragmentPopup={PeopleFragmenPopup} />}
		</main>
	);
};
