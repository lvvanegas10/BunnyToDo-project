import { combineReducers } from "redux";
import users from "./userReducer";

/** Index for reducers */
const rootReducer = combineReducers({
  users,
});

export default rootReducer;
