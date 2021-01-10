import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for loading users*/
export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    /**
     * Reduce loaded users
     */
    case types.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
