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
      .then((res) => resolve(res))
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
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
