import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/card/Cards";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardPeople } from "../../components/bodyCards/bodyCardPeople";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";

export const People = () => {
	const contenCards = useSelector(state => state.dataFromServer.people);
	const { isLoaded } = useSelector(state => state.loading);
	const { pathname } = history.location;

	return (
		<main className="main-people">
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={bodyCardPeople}
			/>
			{!isLoaded && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
		</main>
	);
};
