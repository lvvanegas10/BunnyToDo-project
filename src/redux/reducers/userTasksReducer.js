import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/** Reducer for user tasks (GET, POST, PUT, DELETE) */
export default function usersTaskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_USER_TASKS_SUCCESS:
      return action.tasks;
    case types.CREATE_USER_SUCCESS:
      return [];
    case types.CREATE_USER_TASKS_SUCCESS:
      var newTask = action.task;
      return [...state, newTask];
    case types.UPDATE_USER_TASKS_SUCCESS:
      return state.map((task) => {
        if (task.id === action.task.id) {
          return {
            ...task,
            userId: action.task.userId,
            state: action.task.state,
            description: action.task.description,
          };
        } else {
          return task;
        }
      });
    case types.DELETE_USER_TASK_SUCCESS:
      return state.filter((task) => {
        return task.id !== action.taskId;
      });
    case types.EMPTY_TASK_STORE:
      return [];
    default:
      return state;
  }
}
