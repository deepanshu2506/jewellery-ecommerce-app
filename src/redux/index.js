import { rootReducer } from "./reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
