import { call, takeEvery } from '@redux-saga/core/effects';
import { put } from 'redux-saga/effects';
import { counterPage } from '../../utils';
import { IS_LOADED, LOAD_MORE } from '../actions/actions';

const getPeopleMore = async page => {
  const request = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await request.json();
  return data;
};

export function* workerGetPeopleMore() {
  const page = counterPage();
  const data = yield call(getPeopleMore, page);

  if (data.next === null) {
    yield put({ type: IS_LOADED });
  }

  console.log(data.next);

  console.log('data-more', data);
}

export function* watchLoadMoreDataPeople() {
  yield takeEvery(LOAD_MORE, workerGetPeopleMore);
}
