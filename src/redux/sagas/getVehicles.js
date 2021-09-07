import { LOCATION_CHANGE } from "connected-react-router";
import { take, fork, call, put, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_VEHICLE } from "../../API/urls";
import { SET_VEHICLES_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";

export function* watchLoadDataVehicles() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(selectState);
		if (
			action.payload.location.pathname.endsWith("vehicles") &
			(store.dataFromServer.vehicles.length === 0)
		) {
			yield call(workertGetVehicles);
		}
	}
}

function* workertGetVehicles() {
	yield put(isDataLoadedFromServer(true));
	const data = yield call(getResources, URL_GET_VEHICLE);
	yield put({ type: SET_VEHICLES_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer(false));
}
