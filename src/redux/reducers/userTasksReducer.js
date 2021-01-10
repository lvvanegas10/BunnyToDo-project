import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for loading users*/
export default function usersReducer(state = initialState.tasks, action) {
  switch (action.type) {
    /**
     * Reduce loaded users
     */
    case types.LOAD_USER_TASKS_SUCCESS:
      return action.tasks;
    default:
      return state;
  }
}
