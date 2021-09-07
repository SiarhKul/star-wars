import { LOCATION_CHANGE } from "connected-react-router";
import { call, fork, put, select, take } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_STARSHIPS } from "../../API/urls";
import { SET_STARSHIPS_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";

export function* watchLoadDataStarships() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(selectState);
		if (
			action.payload.location.pathname.endsWith("starships") &
			(store.dataFromServer.starships.length === 0)
		) {
			yield call(workerGetStarships);
		}
	}
}

function* workerGetStarships() {
	yield put(isDataLoadedFromServer(true));
	const data = yield call(getResources, URL_GET_STARSHIPS);
	yield put({ type: SET_STARSHIPS_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer(false));
}
