import {
  addTowishListApi,
  removeFromWishListApi,
} from "../../resources/endpoints";
import { post } from "../../resources/Requests";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_WISHLIST = "SET_WISHLIST";

const addToWishList = (item) => {
  return { type: ADD, payload: item };
};

const removeFromWishList = (item) => {
  return { type: REMOVE, payload: item._id };
};

export const add = (item) => async (dispatch, getState) => {
  dispatch(addToWishList(item));
  const requestBody = { pid: item._id };
  try {
    await post(addTowishListApi, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const remove = (item) => async (dispatch, getState) => {
  dispatch(removeFromWishList(item));
  const requestBody = { pid: item._id };
  try {
    await post(removeFromWishListApi, requestBody);
  } catch (err) {
    console.log(err);
  }
};

export const setWishListItems = (items) => {
  return { type: SET_WISHLIST, payload: items };
};
