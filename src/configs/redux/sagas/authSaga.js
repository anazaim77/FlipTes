import {call, delay, takeEvery, takeLatest} from 'redux-saga/effects';
import types from '../actions/types';
import axios from 'axios';

export function* authSaga() {
  yield takeLatest(types.auth.LOGIN_SG, function* (action) {
    let {data} = yield call(
      () => axios.get('https://jsonplaceholder.typicode.com/todos'),
      // action.payload,
    );
    console.log(`login`, action, data);
    yield delay(1000);
  });
}
