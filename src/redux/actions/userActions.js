import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: LOAD_USERS_SUCCESS*/
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

/** Action creator: CREATE_USER_SUCCESS*/
export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}

/** Action creator:UPDATE_USER_SUCCESS*/
export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER_SUCCESS, user };
}

/** Action creator: DELETE_USERS_SUCCESS*/
export function deleteUserSuccess(userId) {
  return { type: types.DELETE_USER_SUCCESS, userId };
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

/** Create user from API */
export function createUser(name) {
  return function (dispatch) {
    return userApi
      .createUser(name)
      .then((res) => {
        dispatch(createUserSuccess(res.user));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/** Update user from API */
export function updateUser(id, name) {
  return function (dispatch) {
    return userApi
      .updateUser(id, name)
      .then((res) => {
        dispatch(updateUserSuccess(res.user));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/** Delete user from API */
export function deleteUser(userId) {
  return function (dispatch) {
    return userApi
      .deleteUser(userId)
      .then(() => {
        dispatch(deleteUserSuccess(userId));
      })
      .catch((error) => {
        throw error;
      });
  };
}
