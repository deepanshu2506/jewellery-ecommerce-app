import { store } from "../redux/index";

export const get = (api, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    let url = api + "?";
    for (param in params) {
      url += `${param}=${params[param]}&`;
    }
    url = url.substr(0, url.length - 1);
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: store.getState().user.token,
        ...headers,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.code == 1) {
          resolve(res.data);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => reject(err));
  });
};

export const post = (api, body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: store.getState().user.token,
        ...headers,
      },
      body: JSON.stringify(body),
    };
    fetch(api, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.code == 1) {
          resolve(res.data);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => reject(err));
  });
};
