import { call, takeEvery } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_PEOPLE } from "../../API/urls";
import { counterPage } from "../../utils";
import { GET_MORE_PEOPLE, IS_LOADED, SET_PEOPLE } from "../actions/actions";

export function* workerGetPeopleMore() {
	const pageNumber = counterPage("people");

	const data = yield call(getMoreResources, URL_GET_MORE_PEOPLE, pageNumber);

	yield put({ type: SET_PEOPLE, payload: data.results });
	if (typeof data.next !== "string") {
		yield put({ type: IS_LOADED });
	}
}

export function* watchLoadMoreDataPeople() {
	yield takeEvery(GET_MORE_PEOPLE, workerGetPeopleMore);
}
