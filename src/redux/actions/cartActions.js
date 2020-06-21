import { addToCartUrl, removeFromcartUrl } from "../../resources/endpoints";
import { post } from "../../resources/Requests";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SET_CART = "SET_CART";

const add = (data, selectedSize) => ({
  type: ADD_ITEM,
  payload: { ...data, size: selectedSize },
});

const remove = (itemId, selectedSize) => ({
  type: REMOVE_ITEM,
  payload: { itemId, selectedSize },
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
