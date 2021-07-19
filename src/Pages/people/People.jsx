import React from "react";
import { useSelector } from "react-redux";

import { ButtonLoadMore } from "../../components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { withCard } from "../../hoc/withCardPeople";
import { bodyCardPeople } from "../../components/bodyCards/bodyCardPeople";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";

const PeopleCards = withCard(bodyCardPeople);

export const People = () => {
	const contenCards = useSelector(state => state.app.people);

	const isLoaded = useSelector(state => state.app.isLoaded);

	return (
		<main className="main-people">
			<PeopleCards contenCards={contenCards} name="name" />
			{!isLoaded && <ButtonLoadMore action={GET_MORE_PEOPLE} />}
			<ToastContainer />
		</main>
	);
};
