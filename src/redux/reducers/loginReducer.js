import {
  LOG_IN_SENT,
  LOGIN_SUCESS,
  LOGIN_FAILED,
} from "../actions/loginActions";

const initialState = { loading: false, error: "" };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: "",
      };
    case LOG_IN_SENT:
      return { ...state, loading: true };
    case LOGIN_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};
