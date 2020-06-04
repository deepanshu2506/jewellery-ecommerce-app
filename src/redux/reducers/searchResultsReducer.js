import {
  NEW_SEARCH,
  DELETE_FROM_HISTORY,
} from "../actions/searchResultsActions";
import _ from "lodash";

export const SearchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_SEARCH:
      let items = _.filter(state, (item) => item != action.payload).slice(0, 9);
      return [action.payload, ...items];
    case DELETE_FROM_HISTORY:
      console.log(item);
      return _.filter(state, (item) => item != action.payload);
    default:
      return state;
  }
};
