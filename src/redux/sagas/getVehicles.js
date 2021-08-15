import { LOCATION_CHANGE } from "connected-react-router";
import { take, fork, call, put, select } from "redux-saga/effects";
import { getResources } from "../../API/getResources";
import { URL_GET_VEHICLE } from "../../API/urls";
import { SET_VEHICLES_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";

function* workertGetVehicles() {
	const data = yield call(getResources, URL_GET_VEHICLE);
	yield put({ type: SET_VEHICLES_TO_STORE, payload: data.results });
	yield put(isDataLoadedFromServer());
}

export function* watherLoadDataVehicles() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const store = yield select(s => s);
		if (
			action.payload.location.pathname.endsWith("vehicles") &
			(store.dataFromServer.vehicles.length === 0)
		) {
			yield fork(workertGetVehicles);
		}
	}
}
