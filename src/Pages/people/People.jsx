import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ButtonLoadMore } from "../../components";
import { Cards } from "../../components/cards/Cards";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";
import { BodyCardPeople } from "../../components/bodyCards/BodyCardPeople";
import { history } from "../../redux/reducers";
import { useSelector } from "react-redux";
import { Loader } from "../../components/loader/Loader";
import {
	selectIsLoaded,
	selectPeopleStore,
} from "../../redux/selectors/selectors";

export const People = () => {
	const contenCards = useSelector(selectPeopleStore);
	const { isLoadedPeople } = useSelector(selectIsLoaded);
	const { pathname } = history.location;

	return (
		<main className="main-people">
			<Loader />
			<ToastContainer />
			<Cards
				name="name"
				path={pathname}
				contenCards={contenCards}
				BodyComponent={BodyCardPeople}
			/>
			{!isLoadedPeople && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
		</main>
	);
};
