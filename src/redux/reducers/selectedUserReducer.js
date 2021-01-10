import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for the user selected to show its tasks*/
export default function selectedUserReducer(
  state = initialState.selectedUser,
  action
) {
  switch (action.type) {
    /**
     * Update the selected user for userDetail
     */
    case types.CHANGE_SELECTED_USER:
      return action.selectedUser;
    default:
      return state;
  }
}