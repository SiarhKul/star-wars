import { LOCATION_CHANGE } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_PEOPLE } from "../../API/urls";
import {
	isDataLoadedFromServer,
	setPeopleToStore,
} from "../actionsCreators/actionsCrators";

function* workerGetPeople() {
	const data = yield call(getResources, URL_GET_PEOPLE);
	yield put(setPeopleToStore(data.results));
	yield put(isDataLoadedFromServer());
}

export function* watchLoadDataPeople() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);
		if (
			action.payload.location.pathname.endsWith("/people") &
			(store.dataFromServer.people.length === 0)
		) {
			yield fork(workerGetPeople);
		}
	}
}
