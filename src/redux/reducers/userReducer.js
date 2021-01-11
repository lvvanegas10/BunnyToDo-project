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
    case types.CREATE_USER_SUCCESS:
      var newUser = action.user;
      return [...state, newUser];
    case types.UPDATE_USER_SUCCESS:
      return state.map((user) => {
        if (user.id === action.user.id) {
          return { ...user, name: action.user.name };
        } else {
          return user;
        }
      });
    case types.DELETE_USER_SUCCESS:
      return state.filter((user) => {
        return user.id !== action.userId;
      });
    default:
      return state;
  }
}
