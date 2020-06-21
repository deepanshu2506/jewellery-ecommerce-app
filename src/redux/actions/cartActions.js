import { addToCartUrl, removeFromcartUrl } from "../../resources/endpoints";
import { post } from "../../resources/Requests";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REDUCE_ITEM = "REDUCE_ITEM";
export const SET_CART = "SET_CART";

const add = (data, selectedSize) => ({
  type: ADD_ITEM,
  payload: { ...data, size: selectedSize },
});

const remove = (itemId, selectedSize) => ({
  type: REMOVE_ITEM,
  payload: { itemId, selectedSize },
});

const reduce = (data, selectedSize) => ({
  type: REDUCE_ITEM,
  payload: { ...data, size: selectedSize },
});

export const setCartItems = (items) => ({
  type: SET_CART,
  payload: items,
});

export const addItemToCart = (data, selectedSize) => async (dispatch) => {
  const requestBody = { pid: data._id, size: selectedSize };
  dispatch(add(data, selectedSize));
  try {
    await post(addToCartUrl, requestBody);
  } catch (err) {
    console.log(err);
  }
};
export const reduceFromCart = (data, selectedSize) => async (dispatch) => {
  if (data.quantity > 1) {
    dispatch(reduce(data, selectedSize));
    const requestBody = { pid: data._id, size: selectedSize };
    //api call
  } else {
    dispatch(removeFromCart(data._id, selectedSize));
  }
};

export const removeFromCart = (itemId, selectedSize) => async (dispatch) => {
  const requestBody = {
    pid: itemId,
    size: selectedSize,
  };
  dispatch(remove(itemId, selectedSize));
  try {
    await post(removeFromcartUrl, requestBody);
  } catch (err) {
    console.log(err);
  }
};
