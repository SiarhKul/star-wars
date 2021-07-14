import { call, takeEvery } from '@redux-saga/core/effects';
import { LOAD_MORE } from '../actions/actions';

const getPeopleMore = async page => {
  const request = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await request.json();
  return data;
};

export function* workerGetPeopleMore() {
  const data = yield call(getPeopleMore, 9);
  console.log('data-more', data);
}

export function* watchLoadMoreDataPeople() {
  yield takeEvery(LOAD_MORE, workerGetPeopleMore);
}
