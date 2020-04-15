import * as authenticationAction from './constants';

const INIT_STATE = {
  loading: false,
  team: null,
  error: null
};

const Authentication = (state = INIT_STATE, action) => {
  switch (action.type) {
    case authenticationAction.LOGIN_TEAM:
      return {...state, loading: true}
    case authenticationAction.LOGIN_TEAM_SUCCESS:
      return {...state, loading: false, team: action.payload, error: null}
    case authenticationAction.LOGIN_TEAM_FAIL:
      return {...state, loading: false, team: null, error: action.payload}
    default:
      return {...state}
  }
};

export default Authentication;
