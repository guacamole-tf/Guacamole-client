import { all, fork } from 'redux-saga/effects';

function* fetchUser() {
  return;
}

export default function* authSaga() {
  yield all([fork(fetchUser)]);
}
