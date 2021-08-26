import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { bodyCardPeople } from "../../components/bodyCards/bodyCardPeople";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import {
	selectIsLoadedPeople,
	selectPeopleStore,
} from "../../redux/selectors/selectors";

export const People = () => {
	const isLoadedPeople = useSelector(selectIsLoadedPeople);
	const contenCards = useSelector(selectPeopleStore);

	const { pathname } = history.location;

	return (
		<main className="main-people">
			<Loader />
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={bodyCardPeople}
			/>
			{!isLoadedPeople && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
		</main>
	);
};
