import {getRequest} from "../helpers/apiHelpers";

const getTeam = teamId => (
  getRequest(`/teams/${teamId}`)
);

export {getTeam};
