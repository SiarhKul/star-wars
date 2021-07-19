import { call, put, takeEvery } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_STARHIPS } from "../../API/urls";
import { counterPage } from "../../utils";
import {
	GET_MORE_STARSHIPS,
	IS_LOADED_STARSHIPS,
	SET_STARSHIPS_TO_STORE,
} from "../actions/actions";

function* workerGetMoreStarships() {
	const pageNumber = counterPage("starships");
	const data = yield call(getMoreResources, URL_GET_MORE_STARHIPS, pageNumber);

	yield put({ type: SET_STARSHIPS_TO_STORE, payload: data.results });

	if (typeof data.next !== "string") {
		yield put({ type: IS_LOADED_STARSHIPS });
	}
}

export function* watchLoadMoreDataStarships() {
	yield takeEvery(GET_MORE_STARSHIPS, workerGetMoreStarships);
}
