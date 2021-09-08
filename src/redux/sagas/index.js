import { fork } from "redux-saga/effects";

import {
	URL_GET_FILMS,
	URL_GET_PEOPLE,
	URL_GET_PLANETS,
	URL_GET_SPECIES,
	URL_GET_STARSHIPS,
	URL_GET_VEHICLE,
} from "../../API/urls";

import {
	SET_FILMS_TO_STORE,
	SET_PEOPLE_TO_STORE,
	SET_PLANETS_TO_STORE,
	SET_SPECIES_TO_STORE,
	SET_STARSHIPS_TO_STORE,
	SET_VEHICLES_TO_STORE,
} from "../actions/actions";

import { watchLoadData } from "./getPeople";
import { watchLoadMoreDataPeople } from "./getPeopleLoadMore";
import { watchLoadMoreDataPlanets } from "./getPlanetsLoadMore";
import { watcherLoadMoreDataSpecies } from "./getSpeciesLoadMore";
import { watchLoadMoreDataStarships } from "./getStarshipsLoadMore";
import { watchLoadMoreDataVehicles } from "./getVehiclesLoadMore";

export default function* rootSaga() {
	yield fork(watchLoadData, "films", URL_GET_FILMS, SET_FILMS_TO_STORE);
	yield fork(watchLoadData, "people", URL_GET_PEOPLE, SET_PEOPLE_TO_STORE);
	yield fork(watchLoadData, "planets", URL_GET_PLANETS, SET_PLANETS_TO_STORE);
	yield fork(
		watchLoadData,
		"starships",
		URL_GET_STARSHIPS,
		SET_STARSHIPS_TO_STORE
	);
	yield fork(watchLoadData, "vehicles", URL_GET_VEHICLE, SET_VEHICLES_TO_STORE);
	yield fork(watchLoadData, "species", URL_GET_SPECIES, SET_SPECIES_TO_STORE);

	yield fork(watchLoadMoreDataPeople);
	yield fork(watchLoadMoreDataPlanets);
	yield fork(watchLoadMoreDataVehicles);
	yield fork(watchLoadMoreDataStarships);
	yield fork(watcherLoadMoreDataSpecies);
}
