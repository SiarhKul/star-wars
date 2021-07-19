import { fork } from "redux-saga/effects";
import { watchLoadDataPeople } from "./getPeople";
import { watchLoadMoreDataPeople } from "./getPeopleLoadMore";
import { watchLoadDataPlanets } from "./getPlanets";
import { watchLoadMoreDataPlanets } from "./getPlanetsLoadMore";

export default function* rootSaga() {
	yield fork(watchLoadDataPeople);
	yield fork(watchLoadMoreDataPeople);
	yield fork(watchLoadDataPlanets);
	yield fork(watchLoadMoreDataPlanets);
}
