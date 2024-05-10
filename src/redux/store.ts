import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listedUpdatedSlice from "./slices/delete-product-slice";
import ListedItemsSlice from "./slices/all-products-slice";
import listItemSLice from "./slices/product-slice";
import createUserSlice from "./slices/create-user-slice";
import listedCreatedSlice from "./slices/createProduct-slice";
import updateProductSlice from "./slices/update-product-slice";
import userLoginSlice from "./slices/login-user-slice";
import cartSlice from "./slices/cart-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import popupSlice from "./slices/cart-popup-slice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  products: ListedItemsSlice,
  product: listItemSLice,
  deleteProduct: listedUpdatedSlice,
  createProduct: listedCreatedSlice,
  updateProduct: updateProductSlice,
  createUser: createUserSlice,
  loginUser: userLoginSlice,
  cart: cartSlice,
  cartPopup: popupSlice,
  
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
