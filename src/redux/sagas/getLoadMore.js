import { call, takeEvery } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { getMoreResources } from "../../API/getMoreResources";
import { counterPage } from "../../utils";

export function* watchLoadMoreData(
	reduxActionWatcher,
	resource,
	urlGETmore,
	reduxActionFetch,
	reduxActionLoaded
) {
	yield takeEvery(
		reduxActionWatcher,
		workerGetMore,
		resource,
		urlGETmore,
		reduxActionFetch,
		reduxActionLoaded
	);
}

export function* workerGetMore(
	resource,
	urlGETmore,
	reduxActionFetch,
	reduxActionLoaded
) {
	const pageNumber = counterPage(resource);
	const data = yield call(getMoreResources, urlGETmore, pageNumber);

	if (data.next === null) {
		yield put({ type: reduxActionLoaded });
	} else {
		yield put({ type: reduxActionFetch, payload: data.results });
	}
}
