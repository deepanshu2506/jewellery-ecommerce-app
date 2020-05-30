export const ADD_ITEM = "ADD_ITEM";

export const addItemToCart = (data) => ({
  type: ADD_ITEM,
  payload: data,
});
