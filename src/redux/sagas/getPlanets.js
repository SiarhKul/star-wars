import { LOCATION_CHANGE } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_PLANETS } from "../../API/urls";
import { SET_PLANETS_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";

export function* workerGetPlanets() {
	yield put(isDataLoadedFromServer(true));

	const data = yield call(getResources, URL_GET_PLANETS);
	yield put({ type: SET_PLANETS_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer(false));
}

export function* watchLoadDataPlanets() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);
		if (
			action.payload.location.pathname.endsWith("/planets") &
			(store.dataFromServer.planets.length === 0)
		) {
			yield fork(workerGetPlanets);
		}
	}
}
