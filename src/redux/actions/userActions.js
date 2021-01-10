import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: LOAD_USERS_SUCCESS*/
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Load users from API */
export function loadUsers() {
  return function (dispatch) {
    return userApi
      .getUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}
