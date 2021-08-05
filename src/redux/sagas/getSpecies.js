import { LOCATION_CHANGE } from "connected-react-router";
import { take, fork, call, put, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_SPECIES } from "../../API/urls";
import { SET_SPECIES_TO_STORE } from "../actions/actions";

function* workertGetSpecies() {
	const data = yield call(getResources, URL_GET_SPECIES);
	yield put({ type: SET_SPECIES_TO_STORE, payload: data.results });
}

export function* watcherLoadDataSpecies() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);

		if (
			action.payload.location.pathname.endsWith("species") &
			(store.dataFromServer.species.length === 0)
		) {
			yield fork(workertGetSpecies);
		}
	}
}
