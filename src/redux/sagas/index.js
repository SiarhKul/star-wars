import { put, takeEvery, call, fork } from 'redux-saga/effects';

async function getPeople() {
  const request = await fetch('https://swapi.dev/api/people/');
  const data = await request.json();
  return data;
}

export function* workerGetPeople() {
  const data = yield call(getPeople);
  yield put({ type: 'SET_PEOPLE', payload: data.results });
  console.log(data);
}

export function* watchLoadDataPeople() {
  yield takeEvery('LOAD_DATA', workerGetPeople);
}

export default function* rootSaga() {
  yield fork(watchLoadDataPeople);
}
