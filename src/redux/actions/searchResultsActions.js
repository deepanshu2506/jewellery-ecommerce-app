export const NEW_SEARCH = "NEW_SEARCH";
export const DELETE_FROM_HISTORY = "DELETE_FROM_HISTORY";

export const newSearch = (searchText) => {
  return { type: NEW_SEARCH, payload: searchText };
};

export const deleteHistoryItem = (item) => {
  console.log(item);
  return { type: DELETE_FROM_HISTORY, payload: item };
};
