import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {txnSaga} from './txnSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    txnSaga(),
    // otherSaga()
  ]);
}
