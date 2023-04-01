import { RootStore } from "store/rootStore";
import { State } from "./ProductPageSlice";
import { LOAD_STATUSES } from "types/types";

export const getProductPageSlice = (state: RootStore): State =>
  state.productPage;

export const getProduct = (state: RootStore): State["good"] =>
  getProductPageSlice(state).good;

export const getLoadStatus = (state: RootStore): State["loadStatus"] =>
  getProductPageSlice(state).loadStatus;
