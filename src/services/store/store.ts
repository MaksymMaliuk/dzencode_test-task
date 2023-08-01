import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { ordersReducer } from "./ordersSlice";

const reducers = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
})

export const store = configureStore({
  reducer: reducers,
})