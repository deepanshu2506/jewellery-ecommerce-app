import { host } from "../../config";

export const LOG_IN_SENT = "LOG_IN_SENT";
export const LOGIN_SUCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

const _loginUrl = host + "/api/login";

const sendLoginRequest = () => {
  return { type: LOG_IN_SENT };
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

export const requestLogin = (username, password) => {
  return (dispatch) => {
    dispatch(sendLoginRequest());
    console.log(username, password);
    fetch(_loginUrl, {
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
        console.log(typeof data);
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
