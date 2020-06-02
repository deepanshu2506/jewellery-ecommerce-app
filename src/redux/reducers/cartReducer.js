import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "../actions/cartActions";
import _ from "lodash";

const populate = (items) => {
  const cart = [];
  for (item of items) {
    let cartItem = _.find(cart, (i) => item._id == i._id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = { ...item, quantity: 1 };
      cart.push(cartItem);
    }
  }
  return cart;
};

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

    case SET_CART:
      const cartItems = populate(action.payload);
      return cartItems;
    default:
      return state;
  }
};
