import { fork } from "redux-saga/effects";
import { watchLoadDataPeople } from "./getPeople";
import { watchLoadMoreDataPeople } from "./getPeopleLoadMore";
import { watchLoadDataPlanets } from "./getPlanets";

export default function* rootSaga() {
	yield fork(watchLoadDataPeople);
	yield fork(watchLoadMoreDataPeople);
	yield fork(watchLoadDataPlanets);
}
