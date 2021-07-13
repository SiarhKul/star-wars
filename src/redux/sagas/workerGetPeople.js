import { LOCATION_CHANGE } from 'connected-react-router';
import { put, takeEvery, call, take, fork } from 'redux-saga/effects';

async function getPeople() {
  const request = await fetch('https://swapi.dev/api/people/');
  const data = await request.json();
  return data;
}

export function* workerGetPeople() {
  const data = yield call(getPeople);
  yield put({ type: 'SET_PEOPLE', payload: data.results });
}

export function* watchLoadDataPeople() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.endsWith('blog')) {
    }
    yield fork(workerGetPeople);
  }
}
