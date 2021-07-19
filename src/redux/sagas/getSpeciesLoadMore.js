import { call, put, takeEvery } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_SPECIES } from "../../API/urls";
import { counterPage } from "../../utils";
import {
	GET_MORE_SPECIES,
	IS_LOADED_SPECIES,
	SET_SPECIES_TO_STORE,
} from "../actions/actions";

export function* workerGetMoreSpecies() {
	const pageNumber = counterPage("species");
	console.log(pageNumber);
	const data = yield call(getMoreResources, URL_GET_MORE_SPECIES, pageNumber);

	yield put({ type: SET_SPECIES_TO_STORE, payload: data.results });

	if (typeof data.next !== "string") {
		yield put({ type: IS_LOADED_SPECIES });
	}
}

export function* watcherLoadMoreDataSpecies() {
	yield takeEvery(GET_MORE_SPECIES, workerGetMoreSpecies);
}
