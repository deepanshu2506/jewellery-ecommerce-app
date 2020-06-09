import { addToCartUrl, removeFromcartUrl } from "../../resources/endpoints";
import { post } from "../../resources/Requests";

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

export const addItemToCart = (data) => async (dispatch, getState) => {
  const requestBody = { id: getState().user.user._id, pid: data._id };
  dispatch(add(data));
  try {
    await post(addToCartUrl, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = (itemId) => async (dispatch, getState) => {
  const requestBody = {
    id: getState().user.user._id,
    pid: itemId,
  };
  dispatch(remove(itemId));
  try {
    await post(removeFromcartUrl, requestBody);
  } catch (err) {
    console.log(err);
  }
};
