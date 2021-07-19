import React from "react";
import { useSelector } from "react-redux";
import { bodyCardFilm } from "../../components/bodyCards/bodyCardFIlm";
import { withCard } from "../../hoc/withCardPeople";
import { ToastContainer } from "react-toastify";

const FilmsCard = withCard(bodyCardFilm);

export const Films = () => {
	const contenCards = useSelector(state => state.app.films);
	console.log(contenCards);
	return (
		<main>
			{
				<>
					<FilmsCard contenCards={contenCards} name="title" />
					<ToastContainer />
				</>
			}
		</main>
	);
};
