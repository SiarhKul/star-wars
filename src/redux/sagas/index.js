import { fork } from "redux-saga/effects";

import {
	URL_GET_FILMS,
	URL_GET_MORE_PEOPLE,
	URL_GET_MORE_PLANETS,
	URL_GET_MORE_SPECIES,
	URL_GET_MORE_STARHIPS,
	URL_GET_MORE_VEHICLE,
	URL_GET_PEOPLE,
	URL_GET_PLANETS,
	URL_GET_SPECIES,
	URL_GET_STARSHIPS,
	URL_GET_VEHICLE,
} from "../../API/urls";

import {
	GET_MORE_PEOPLE,
	GET_MORE_PLANETS,
	GET_MORE_SPECIES,
	GET_MORE_STARSHIPS,
	GET_MORE_VEHICLES,
	IS_PEOPLE_LOADED,
	IS_PLANETS_LOADED,
	IS_SPECIES_SPECIES,
	IS_STARSHIPS_LOADED,
	IS_VEHICLES_LOADED,
	SET_FILMS_TO_STORE,
	SET_PEOPLE_TO_STORE,
	SET_PLANETS_TO_STORE,
	SET_SPECIES_TO_STORE,
	SET_STARSHIPS_TO_STORE,
	SET_VEHICLES_TO_STORE,
} from "../actions/actions";

import { watchLoadData } from "./getLoad";
import { watchLoadMoreData } from "./getLoadMore";

export default function* rootSaga() {
	yield fork(watchLoadData, "films", URL_GET_FILMS, SET_FILMS_TO_STORE);
	yield fork(watchLoadData, "people", URL_GET_PEOPLE, SET_PEOPLE_TO_STORE);
	yield fork(watchLoadData, "planets", URL_GET_PLANETS, SET_PLANETS_TO_STORE);
	yield fork(watchLoadData, "vehicles", URL_GET_VEHICLE, SET_VEHICLES_TO_STORE);
	yield fork(watchLoadData, "species", URL_GET_SPECIES, SET_SPECIES_TO_STORE);
	yield fork(
		watchLoadData,
		"starships",
		URL_GET_STARSHIPS,
		SET_STARSHIPS_TO_STORE
	);

	yield fork(
		watchLoadMoreData,
		GET_MORE_PEOPLE,
		"people",
		URL_GET_MORE_PEOPLE,
		SET_PEOPLE_TO_STORE,
		IS_PEOPLE_LOADED
	);

	yield fork(
		watchLoadMoreData,
		GET_MORE_PLANETS,
		"planets",
		URL_GET_MORE_PLANETS,
		SET_PLANETS_TO_STORE,
		IS_PLANETS_LOADED
	);

	yield fork(
		watchLoadMoreData,
		GET_MORE_STARSHIPS,
		"starships",
		URL_GET_MORE_STARHIPS,
		SET_STARSHIPS_TO_STORE,
		IS_STARSHIPS_LOADED
	);

	yield fork(
		watchLoadMoreData,
		GET_MORE_VEHICLES,
		"vehicles",
		URL_GET_MORE_VEHICLE,
		SET_VEHICLES_TO_STORE,
		IS_VEHICLES_LOADED
	);

	yield fork(
		watchLoadMoreData,
		GET_MORE_SPECIES,
		"species",
		URL_GET_MORE_SPECIES,
		SET_SPECIES_TO_STORE,
		IS_SPECIES_SPECIES
	);
}
