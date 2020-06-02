export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_WISHLIST = "SET_WISHLIST";

export const add = (item) => {
  return { type: ADD, payload: item };
};

export const remove = (item) => {
  return { type: REMOVE, payload: item._id };
};

export const setWishListItems = (items) => {
  return { type: SET_WISHLIST, payload: items };
};
