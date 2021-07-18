import { LOCATION_CHANGE } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import { handlerError } from "../../utils";
import { SET_PLANETS } from "../actions/actions";

async function getPlanets() {
	try {
		const request = await fetch("https://swapi.dev/api/planets");
		const data = await request.json();
		return data;
	} catch (error) {
		handlerError(error.message);
	}
}

export function* workerGetPlanets() {
	const data = yield call(getPlanets);
	yield put({ type: SET_PLANETS, payload: data.results });
}

export function* watchLoadDataPlanets() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);
		if (
			action.payload.location.pathname.endsWith("/planets") &
			(store.app.planets.length === 0)
		) {
			yield fork(workerGetPlanets);
		}
	}
}
