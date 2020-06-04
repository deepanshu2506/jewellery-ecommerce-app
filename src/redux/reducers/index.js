import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { WishListReducer } from "./wishListReducer";
import { SearchResultsReducer } from "./searchResultsReducer";

export const rootReducer = combineReducers({
  /**
   * key value pairs for state to reducer mapping
   */
  user: userReducer,
  cart: cartReducer,
  wishList: WishListReducer,
  searchResults: SearchResultsReducer,
});
