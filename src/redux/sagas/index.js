import { takeEvery, fork } from 'redux-saga/effects';
import { watchLoadDataPeople } from './workerGetPeople';

export default function* rootSaga() {
  yield fork(watchLoadDataPeople);
}
