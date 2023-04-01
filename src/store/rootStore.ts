import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { reducer as BasketSlice } from "../pages/Basket/BasketSlice";
import { reducer as mainSlice } from "../pages/MainPage/mainSlice";
import { reducer as menuSlice } from "../components/Menu/menuSlice";
import { reducer as productPageSlice } from "../pages/ProductPage/ProductPageSlice";

const rootReducer = combineReducers({
  basket: BasketSlice,
  main: mainSlice,
  menu: menuSlice,
  productPage: productPageSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
