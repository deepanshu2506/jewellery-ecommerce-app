import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  /**
   * key value pairs for state to reducer mapping
   */
  user: loginReducer,
});
