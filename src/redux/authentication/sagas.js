import {loginTeamFail} from "./actions";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {LOGIN_TEAM} from "./constants";
import {getTeam} from "../../api/teamApi";

function* loginTeam() {
  const response = yield call(getTeam); // TODO: API call

  yield put(response.error
    ? loginTeamFail(response)
    : loginTeamFail(response))
}

export function* watchLoginTeam() {
  yield takeEvery(LOGIN_TEAM, loginTeam);
}

function* authenticationSaga() {
  yield all([fork(watchLoginTeam)]);
}

export default authenticationSaga;
