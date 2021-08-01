import { LOCATION_CHANGE } from "connected-react-router";
import { fork, put, take, select } from "redux-saga/effects";
import { isVisiblePopup } from "../actionsCreators/actionsCrators";
import { history } from "../reducers";

function* workerHirePupuRedoUndo() {
	console.log("close popup");
	// yield put(isVisiblePopup(false));
}

function* workerShowPupuRedoUndo() {
	console.log("open popup");
	// yield put(isVisiblePopup(false));
	// yield put(isVisiblePopup(true));
}

export function* watchBrowserRedoUndo() {
	while (true) {
		const action = yield take(LOCATION_CHANGE);
		const { search } = action.payload.location;

		if (/selected/i.test(search)) {
			yield fork(workerShowPupuRedoUndo);
		} else {
			yield fork(workerHirePupuRedoUndo);
		}
	}
}
