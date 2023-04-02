import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { ProductDetailSlice } from "./productDetail/slice";
import thunk from "redux-thunk";
import { actionLog } from "./middleware/actionLog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ProductSearchSlice } from "./productSearch/slice";
import { Userslice } from "./user/slice";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: ProductDetailSlice.reducer,
  productSearch: ProductSearchSlice.reducer,
  user: Userslice.reducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
