import { LOCATION_CHANGE } from 'connected-react-router';
import {
  put, call, take, select,
} from 'redux-saga/effects';
import { getResources } from '../../API/getResources';
import { isDataLoadedFromServer } from '../actionsCreators/actionsCreators';
import { selectState } from '../selectors/selectors';


export function* workerGet(urlGET, reduxAction) {
  yield put(isDataLoadedFromServer(true));
  const data = yield call(getResources, urlGET);
  yield put({ type: reduxAction, payload: data.results });
  yield put(isDataLoadedFromServer(false));
}

export function* watchLoadData(url, urlGET, reduxAction) {
  while (true) {
    const { payload } = yield take(LOCATION_CHANGE);
    const store = yield select(selectState);

    if (
      payload.location.pathname.endsWith(url)
      && (store.dataFromServer[url].length === 0)
    ) {
      yield call(workerGet, urlGET, reduxAction);
    }
  }
}