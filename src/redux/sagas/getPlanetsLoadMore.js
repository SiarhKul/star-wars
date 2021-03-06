import { call, takeEvery, put } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_PLANETS } from "../../API/urls";
import { counterPage } from "../../utils";
import {
	GET_MORE_PLANETS,
	IS_PLANETS_LOADED,
	SET_PLANETS_TO_STORE,
} from "../actions/actions";

export function* workerGetMorePlanets() {
	const pageNumber = counterPage("planets");
	const data = yield call(getMoreResources, URL_GET_MORE_PLANETS, pageNumber);

	yield put({ type: SET_PLANETS_TO_STORE, payload: data.results });

	if (typeof data.next !== "string") {
		yield put({ type: IS_PLANETS_LOADED });
	}
}

export function* watchLoadMoreDataPlanets() {
	yield takeEvery(GET_MORE_PLANETS, workerGetMorePlanets);
}
