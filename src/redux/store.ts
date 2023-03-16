import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { ProductDetailSlice } from "./productDetail/slice";
import thunk from "redux-thunk";
import { actionLog } from "./middleware/actionLog";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: ProductDetailSlice.reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

export type RootState = ReturnType<typeof store.getState>;

export default store;
