import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import types from '../actions/types';
import axios from 'axios';
import {
  set_list_all_rd,
  set_loading_done_rd,
  set_loading_rd,
} from '../actions/txnActions';

const BASE_URL_LIST = 'https://nextar.flip.id/frontend-test';

export function* txnSaga() {
  yield takeLatest(types.txn.FETCH_ALL_SG, function* (action) {
    yield put(set_loading_rd());
    let res = yield call(() => axios.get(BASE_URL_LIST));
    console.log(`res list`, res, action);
    yield put(
      set_list_all_rd({array: Object.values(res.data), dataTxn: res.data}),
    );
    yield put(set_loading_done_rd());
  });
}
