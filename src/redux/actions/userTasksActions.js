import * as types from "./actionTypes";
import * as userTasksApi from "../../api/userTasksApi";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: LOAD_USER_TASKS_SUCCESS*/
export function loadUserTasksSuccess(tasks) {
  return { type: types.LOAD_USER_TASKS_SUCCESS, tasks };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Load users from API */
export function loadUserTasks(userId) {
  return function (dispatch) {
    return userTasksApi
      .getUserTasks(userId)
      .then((tasks) => {
        dispatch(loadUserTasksSuccess(tasks));
      })
      .catch((error) => {
        throw error;
      });
  };
}
