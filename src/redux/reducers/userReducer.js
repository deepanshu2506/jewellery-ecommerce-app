import {
  LOADING_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from "../actions/userActions";

const initialState = { loading: false, error: "" };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: "",
      };
    case LOADING_REQUEST:
      return { ...state, loading: true };
    case LOGIN_FAILED:
      return { error: action.payload };
    case SIGNUP_FAILED:
      return { err: action.payload.err };
    case SIGNUP_SUCCESS:
      return { isSignupSuccess: 1 };
    default:
      return state;
  }
};
