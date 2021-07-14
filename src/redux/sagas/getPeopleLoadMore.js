import { call, takeEvery } from '@redux-saga/core/effects';
import { put } from 'redux-saga/effects';
import { counterPage, handlerError } from '../../utils';
import { IS_LOADED, LOAD_MORE, SET_PEOPLE } from '../actions/actions';

const getPeopleMore = async page => {
  try {
    const request = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await request.json();
    return data;
  } catch (error) {
    handlerError(error);
  }
};

export function* workerGetPeopleMore() {
  const page = counterPage();
  const data = yield call(getPeopleMore, page);

  yield put({ type: SET_PEOPLE, payload: data.results });
  if (data.next === null) {
    yield put({ type: IS_LOADED });
  }
}

export function* watchLoadMoreDataPeople() {
  yield takeEvery(LOAD_MORE, workerGetPeopleMore);
}
