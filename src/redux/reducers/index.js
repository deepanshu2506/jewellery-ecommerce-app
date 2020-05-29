import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  /**
   * key value pairs for state to reducer mapping
   */
  user: userReducer,
});
