import { fork } from "redux-saga/effects";
import { watchLoadDataFilms } from "./getFilms";
import { watchLoadDataPeople } from "./getPeople";
import { watchLoadMoreDataPeople } from "./getPeopleLoadMore";
import { watchLoadDataPlanets } from "./getPlanets";
import { watchLoadMoreDataPlanets } from "./getPlanetsLoadMore";
import { watcherLoadDataSpecies } from "./getSpecies";
import { watcherLoadMoreDataSpecies } from "./getSpeciesLoadMore";
import { watchLoadDataStarships } from "./getStarships";
import { watchLoadMoreDataStarships } from "./getStarshipsLoadMore";
import { watchLoadDataVehicles } from "./getVehicles";
import { watchLoadMoreDataVehicles } from "./getVehiclesLoadMore";

export default function* rootSaga() {
	yield fork(watchLoadDataPeople);
	yield fork(watchLoadMoreDataPeople);
	yield fork(watchLoadDataPlanets);
	yield fork(watchLoadMoreDataPlanets);
	yield fork(watchLoadDataStarships);
	yield fork(watchLoadMoreDataStarships);
	yield fork(watchLoadDataFilms);
	yield fork(watchLoadDataVehicles);
	yield fork(watchLoadMoreDataVehicles);
	yield fork(watcherLoadDataSpecies);
	yield fork(watcherLoadMoreDataSpecies);
}
