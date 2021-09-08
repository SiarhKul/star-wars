import { LOCATION_CHANGE } from "connected-react-router";
import { put, call, take, fork, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_PEOPLE } from "../../API/urls";
import { SET_PEOPLE_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";

export function* workerGetPeople() {
	yield put(isDataLoadedFromServer(true));
	const data = yield call(getResources, URL_GET_PEOPLE);
	yield put({ type: SET_PEOPLE_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer(false));
}

export function* watchLoadDataPeople() {
	while (true) {
		const { payload } = yield take(LOCATION_CHANGE);
		const store = yield select(selectState);

		if (
			payload.location.pathname.endsWith("/people") &
			(store.dataFromServer.people.length === 0)
		) {
			yield call(workerGetPeople);
		}
	}
}
