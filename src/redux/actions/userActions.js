import { loginUrl, signupUrl } from "../../resources/endpoints";
export const LOADING_REQUEST = "LOADING_REQUEST";
export const LOGIN_SUCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

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
