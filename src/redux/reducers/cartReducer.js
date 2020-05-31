import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartActions";
import _ from "lodash";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      let cartItem = _.find(state, (item) => item._id == action.payload._id);
      if (cartItem) {
        cartItem.quantity++;
        return state;
      } else {
        console.log("here");
        cartItem = { ...action.payload, quantity: 1 };
        return [...state, cartItem];
      }
    case REMOVE_ITEM:
      const cart = _.filter(state, (item) => {
        return item._id != action.payload;
      });
      return cart;
    default:
      return state;
  }
};
