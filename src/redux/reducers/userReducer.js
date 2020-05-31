import {
  LOADING_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  NEW_ADDRESS,
  CHANGE_ADDRESS,
} from "../actions/userActions";

const initialState = {
  loading: false,
  error: "",
  addresses: [],
};

const addAddress = (state, newAddress) => {
  let addresses = state.addresses;
  let newState = state;
  if (addresses.length == 0) {
    newState.currentAddress = { ...newAddress, id: 1 };
  }
  const newAdd = { ...newAddress, id: addresses.length + 1 };
  addresses = [...addresses, newAdd];
  newState = { ...newState, addresses };
  return newState;
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...initialState,
        ...action.payload,
      };
    case LOADING_REQUEST:
      return { ...state, loading: true };
    case LOGIN_FAILED:
      return { error: action.payload };
    case SIGNUP_FAILED:
      return { err: action.payload.err };
    case SIGNUP_SUCCESS:
      return { isSignupSuccess: 1 };
    case NEW_ADDRESS:
      return addAddress(state, action.payload);
    case CHANGE_ADDRESS:
      return { ...state, currentAddress: action.payload };
    default:
      return state;
  }
};
