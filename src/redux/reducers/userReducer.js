import {
  LOADING_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  NEW_ADDRESS,
  CHANGE_ADDRESS,
  REMOVE_ADDRESS,
} from "../actions/userActions";
import _ from "lodash";

import shortId from "shortid";

const initialState = {
  loading: false,
  error: "",
  addresses: [],
};

const addAddress = (state, newAddress) => {
  let addresses = state.addresses;
  let newState = state;
  if (addresses.length == 0) {
    newState.currentAddress = { ...newAddress, id: shortId.generate() };
  }
  const newAdd = { ...newAddress, id: shortId.generate() };
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
      return { isSignupSuccess: 1, loading: false };
    case NEW_ADDRESS:
      return addAddress(state, action.payload);
    case CHANGE_ADDRESS:
      return { ...state, currentAddress: action.payload };
    case REMOVE_ADDRESS:
      const addresses = _.filter(
        state.addresses,
        (address) => address.id != action.payload.id
      );
      if (state.currentAddress.id == action.payload.id) {
        return { ...state, currentAddress: undefined, addresses };
      } else {
        return { ...state, addresses };
      }
    default:
      return state;
  }
};
