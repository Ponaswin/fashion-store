import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ListedItemsSlice from "./slices/all-products-slice";

const reducer = combineReducers({
  products: ListedItemsSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
