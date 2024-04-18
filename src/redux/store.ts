import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listedUpdatedSlice from "./slices/delete-product-slice";
import ListedItemsSlice from "./slices/all-products-slice";
import listItemSLice from "./slices/product-slice";
import createUserSlice from "./slices/create-user-slice";
import listedCreatedSlice from "./slices/createProduct-slice";
import updateProductSlice from "./slices/update-product-slice";
import userLoginSlice from "./slices/login-user-slice";
const reducer = combineReducers({
  products: ListedItemsSlice,
  product: listItemSLice,
  deleteProduct: listedUpdatedSlice,
  createProduct: listedCreatedSlice,
  updateProduct: updateProductSlice,
  createUser: createUserSlice,
  loginUser: userLoginSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
