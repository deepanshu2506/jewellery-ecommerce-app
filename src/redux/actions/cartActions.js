import { addToCartUrl, removeFromcartUrl } from "../../resources/endpoints";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SET_CART = "SET_CART";

const add = (data) => ({
  type: ADD_ITEM,
  payload: data,
});

const remove = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const setCartItems = (items) => ({
  type: SET_CART,
  payload: items,
});

export const addItemToCart = (data) => (dispatch, getState) => {
  const requestBody = { id: getState().user.user._id, pid: data._id };
  const options = {
    method: "POST",
    headers: {
      Authorization: getState().user.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  dispatch(add(data));
  fetch(addToCartUrl, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
  const requestBody = {
    id: getState().user.user._id,
    pid: itemId,
  };
  const options = {
    method: "POST",
    headers: {
      Authorization: getState().user.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  dispatch(remove(itemId));
  fetch(removeFromcartUrl, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
