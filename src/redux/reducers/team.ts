import { ADD_TEAM_MEMBER } from "../actionTypes/teamTypes";
import { TeamState, TeamTypes } from "../actions/team/team";
import defaultTeamDataJSON from "../defaultData/teamDefaultData.json";

const INITIAL_STATE: TeamState = {
  data: defaultTeamDataJSON.data
};

function teamReducer(state = INITIAL_STATE, action: TeamTypes): TeamState {
  switch (action.type) {
    case ADD_TEAM_MEMBER: {
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    }
    default:
      return state;
  }
}

export default teamReducer;
