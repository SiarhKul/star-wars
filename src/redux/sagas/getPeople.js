import { LOCATION_CHANGE } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import { SET_PEOPLE } from "../actions/actions";

async function getPeople() {
	try {
		const request = await fetch("https://swapi.dev/api/people/");
		const data = await request.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export function* workerGetPeople() {
	const data = yield call(getPeople);
	yield put({ type: SET_PEOPLE, payload: data.results });
}

export function* watchLoadDataPeople() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);

		if (
			action.payload.location.pathname.endsWith("/") &
			(store.app.people.length === 0)
		) {
			yield fork(workerGetPeople);
		}
	}
}
