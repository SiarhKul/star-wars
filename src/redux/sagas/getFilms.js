//todo убрать (store.dataFromServer.films.length === 0)
import { LOCATION_CHANGE } from "connected-react-router";
import { call, fork, put, select, take } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_FILMS } from "../../API/urls";
import { SET_FILMS_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";

export function* watchLoadDataFilms() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);

		if (
			action.payload.location.pathname.endsWith("/films") &
			(store.dataFromServer.films.length === 0)
		) {
			yield call(workerGetFilms);
		}
	}
}

export function* workerGetFilms() {
	yield put(isDataLoadedFromServer(true));
	const data = yield call(getResources, URL_GET_FILMS);
	yield put({ type: SET_FILMS_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer(false));
}
