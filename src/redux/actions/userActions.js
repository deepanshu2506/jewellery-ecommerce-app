import {
  loginUrl,
  signupUrl,
  syncCartWishListUrl,
} from "../../resources/endpoints";
import { setCartItems } from "./cartActions";
import { setWishListItems } from "./wishListActions";
import { post } from "../../resources/Requests";

export const LOADING_REQUEST = "LOADING_REQUEST";
export const LOGIN_SUCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const NEW_ADDRESS = "NEW_ADDRESS";
export const CHANGE_ADDRESS = "CHANGE_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const LOGOUT = "LOGOUT";

const loadingRequest = () => {
  return { type: LOADING_REQUEST };
};

const loginInSuccess = (user) => {
  return {
    type: LOGIN_SUCESS,
    payload: user,
  };
};

const loginInFailed = (data) => ({
  type: LOGIN_FAILED,
  payload: data,
});

const signUpFailed = (data) => ({
  type: SIGNUP_FAILED,
  payload: { err: data },
});

const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});

export const populateCartAndWishList = () => async (dispatch, getState) => {
  const userId = getState().user.user._id;
  const payLoad = { id: userId };
  try {
    const data = await post(syncCartWishListUrl, payLoad);
    dispatch(setCartItems(data.cart));
    dispatch(setWishListItems(data.wishlist));
  } catch (err) {
    console.log(err);
  }
};

export const requestLogin = (username, password) => {
  return (dispatch) => {
    dispatch(loadingRequest());
    console.log(username, password);
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((data) => {
        return data.status == 200 ? data.json() : data.text();
      })
      .then((data) => {
        // console.log(typeof data);
        if (typeof data !== "string") {
          dispatch(loginInSuccess(data));
          populateCartAndWishList();
        } else {
          dispatch(loginInFailed(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //make async call if successfull call loginSucess else login failed
  };
};

export const signup = (mobile, username, password) => (dispatch) => {
  dispatch(loadingRequest());
  const signupPayload = { mobile, username, password };
  fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupPayload),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      if (data.code != 0) {
        dispatch(signUpSuccess());
      } else {
        dispatch(signUpFailed("username already exists"));
      }
    })
    .catch((err) => dispatch(signUpFailed("something went wrong")));
};

export const saveAddress = (address) => {
  return {
    type: NEW_ADDRESS,
    payload: address,
  };
};

export const removeAddress = (address) => {
  return {
    type: REMOVE_ADDRESS,
    payload: address,
  };
};
export const editAddress = (address) => (dispatch) => {
  dispatch(removeAddress(address));
  dispatch(saveAddress(address));
};

export const changeCurrentAddress = (address) => {
  return { type: CHANGE_ADDRESS, payload: address };
};
