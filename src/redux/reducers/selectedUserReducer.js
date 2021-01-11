import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for the user selected to show its tasks*/
export default function selectedUserReducer(
  state = initialState.selectedUser,
  action
) {
  switch (action.type) {
    case types.CHANGE_SELECTED_USER:
      return action.selectedUser;
    case types.CREATE_USER_SUCCESS:
      return action.user.id;
    default:
      return state;
  }
}
