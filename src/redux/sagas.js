import {all} from 'redux-saga/effects';
import authenticationSaga from './authentication/sagas';

export default function* rootSaga() {
  yield all([authenticationSaga()]);
}
