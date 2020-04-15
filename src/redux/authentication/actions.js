import * as authenticationAction from './constants';

export const loginTeam = () => ({
  type: authenticationAction.LOGIN_TEAM,
  payload: null
});

export const loginTeamSuccess = () => ({
  type: authenticationAction.LOGIN_TEAM_SUCCESS,
  payload: null
});

export const loginTeamFail = () => ({
  type: authenticationAction.LOGIN_TEAM_FAIL,
  payload: null
});
