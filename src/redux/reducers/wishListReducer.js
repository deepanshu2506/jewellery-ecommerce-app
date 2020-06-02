import _ from "lodash";

import { ADD, REMOVE, SET_WISHLIST } from "../actions/wishListActions";

export const WishListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      console.log("abcd");
      const contains = _.find(state, (item) => {
        console.log(item._id, action.payload._id);
        return item._id == action.payload._id;
      });
      if (!contains) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case REMOVE:
      return _.filter(state, (item) => {
        return item._id != action.payload;
      });
    case SET_WISHLIST:
      return action.payload;
    default:
      return state;
  }
};
