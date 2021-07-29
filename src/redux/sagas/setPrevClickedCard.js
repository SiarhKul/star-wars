import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from "connected-react-router";
import { put, take, takeEvery, select } from "redux-saga/effects";
import {
	isVisiblePopup,
	setClickedCardtoStore,
} from "../actionsCreators/actionsCrators";
import { history } from "../reducers";

function* workerSetPrevClickedCard() {
	const action = yield take(LOCATION_CHANGE);
	const store = yield select(s => s);
	// console.log("action", action.payload);
	// console.log("srore", store);

	// console.log("historty", history);

	// const prevCardClicked = history.location.state?.prevCardClicked;
	// // console.log("prevIN history", prevCardClicked);

	// if (prevCardClicked instanceof Object) {
	// 	yield put(setClickedCardtoStore(prevCardClicked));
	// 	// console.log("workPrev");
	// }
}

export function* watchSetPrevClickedCard() {
	yield takeEvery(LOCATION_CHANGE, workerSetPrevClickedCard);
}
