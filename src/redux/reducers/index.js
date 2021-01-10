import { combineReducers } from "redux";
import users from "./userReducer";
import tasks from "./userTasksReducer";
import selectedUser from "./selectedUserReducer";

/** Index for reducers */
const rootReducer = combineReducers({
  users,
  tasks,
  selectedUser,
});

export default rootReducer;
