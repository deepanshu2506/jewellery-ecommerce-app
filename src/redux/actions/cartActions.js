export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItemToCart = (data) => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});
