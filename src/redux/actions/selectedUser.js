import * as types from "./actionTypes";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------
/** Action creator: UPDATE_SELECTED_USER*/
export function changeSelectedUserSuccess(selectedUser) {
  return { type: types.CHANGE_SELECTED_USER, selectedUser };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Update the user that is selected to show in UserDetail */
export function changeSelectedUser(user) {
  return function (dispatch) {
    return dispatch(changeSelectedUserSuccess(user));
  };
}
