import { TeamMember } from "../../types";
import { ADD_TEAM_MEMBER } from "../../actionTypes/teamTypes";

export const addTeamMember = (data: TeamMember) => ({
  payload: data,
  type: ADD_TEAM_MEMBER
});

export interface TeamState {
  data: TeamMember[];
}

export interface TeamAction {
  type: string;
  payload: any;
}

export type TeamTypes = TeamAction;
