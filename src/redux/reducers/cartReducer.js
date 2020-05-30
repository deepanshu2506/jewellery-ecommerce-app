import { ADD_ITEM } from "../actions/cartActions";
import _ from "lodash";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(action);
      let cartItem = _.find(state, (item) => item._id == action.payload._id);
      if (cartItem) {
        cartItem.quantity++;
        return state;
      } else {
        console.log("here");
        cartItem = { ...action.payload, quantity: 1 };
        return [...state, cartItem];
      }
    default:
      return state;
  }
};
