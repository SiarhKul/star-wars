import { call, put, takeEvery } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_SPECIES } from "../../API/urls";
import { counterPage } from "../../utils";
import {
	GET_MORE_SPECIES,
	IS_SPECIES_SPECIES,
	SET_SPECIES_TO_STORE,
} from "../actions/actions";

export function* watcherLoadMoreDataSpecies() {
	yield takeEvery(GET_MORE_SPECIES, workerGetMoreSpecies);
}

export function* workerGetMoreSpecies() {
	const pageNumber = counterPage("species");
	const data = yield call(getMoreResources, URL_GET_MORE_SPECIES, pageNumber);
	console.log("🔴----------- 🔸 data", data);

	yield put({ type: SET_SPECIES_TO_STORE, payload: data.results });

	if (typeof data.next !== "string") {
		yield put({ type: IS_SPECIES_SPECIES });
	}
}
