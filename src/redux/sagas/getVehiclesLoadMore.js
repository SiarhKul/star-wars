import { call, put, takeEvery } from "redux-saga/effects";
import { counterPage } from "../../utils";
import {
	GET_MORE_VEHICLES,
	IS_LOADED_VEHICLES,
	SET_VEHICLES_TO_STORE,
} from "../actions/actions";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_VEHICLE } from "../../API/urls";

function* workerGetMoreVehicles() {
	const pageNumber = counterPage("vehicles");
	const data = yield call(getMoreResources, URL_GET_MORE_VEHICLE, pageNumber);

	yield put({ type: SET_VEHICLES_TO_STORE, payload: data.results });

	if (typeof data.next !== "string") {
		yield put({ type: IS_LOADED_VEHICLES });
	}

	console.log(data);
}

export function* watchLoadMoreDataVehicles() {
	yield takeEvery(GET_MORE_VEHICLES, workerGetMoreVehicles);
}
