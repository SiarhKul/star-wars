import { fork } from 'redux-saga/effects';
import { watchLoadDataPeople } from './getPeople';
import { watchLoadMoreDataPeople } from './getPeopleLoadMore';

export default function* rootSaga() {
  yield fork(watchLoadDataPeople);
  yield fork(watchLoadMoreDataPeople);
}
