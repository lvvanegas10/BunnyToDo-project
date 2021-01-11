import * as types from "./actionTypes";
import * as userTasksApi from "../../api/userTasksApi";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: LOAD_USER_TASKS_SUCCESS*/
export function loadUserTasksSuccess(tasks) {
  return { type: types.LOAD_USER_TASKS_SUCCESS, tasks };
}

/** Action creator: EMPTY_TASK_STORE*/
export function emptyTaksStoreSuccess() {
  return { type: types.EMPTY_TASK_STORE };
}

/** Action creator: CREATE_USER_TASKS_SUCCESS*/
export function createUserTasksSuccess(task) {
  return { type: types.CREATE_USER_TASKS_SUCCESS, task };
}

/** Action creator: UPDATE_USER_TASKS_SUCCESS*/
export function updateUserTasksSuccess(task) {
  return { type: types.UPDATE_USER_TASKS_SUCCESS, task };
}

/** Action creator: DELETE_USER_TASK_SUCCESS*/
export function deleteUserTaskSuccess(taskId) {
  return { type: types.DELETE_USER_TASK_SUCCESS, taskId };
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

/** Empty tasks */
export function emptyTaksStore() {
  return function (dispatch) {
    return dispatch(emptyTaksStoreSuccess());
  };
}

/** Create user from API */
export function createUserTask(userId, description, state) {
  return function (dispatch) {
    return userTasksApi
      .createUserTask(userId, description, state)
      .then((res) => {
        dispatch(createUserTasksSuccess(res.task));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/** Update user from API */
export function updateUserTask(id, userId, description, state) {
  return function (dispatch) {
    return userTasksApi
      .updateUserTask(id, userId, description, state)
      .then((res) => {
        dispatch(updateUserTasksSuccess(res.task));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/** Delete task from API */
export function deleteUserTask(userId, taskId) {
  return function (dispatch) {
    return userTasksApi
      .deleteUserTask(userId, taskId)
      .then(() => {
        dispatch(deleteUserTaskSuccess(taskId));
      })
      .catch((error) => {
        throw error;
      });
  };
}
