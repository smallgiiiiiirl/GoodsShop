import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "api/api";
import { Good, LOAD_STATUSES } from "types/types";

export const SLICE_NAME = "mainPage";

const fetchProducts = createAsyncThunk(SLICE_NAME, getProducts);

export interface State {
  goods: Good[];
  loadStatus: LOAD_STATUSES;
  total: number;
}

export const initialState: State = {
  goods: [],
  loadStatus: LOAD_STATUSES.UNKNOWN,
  total: 0,
};

const { reducer, actions: sliceActions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.goods = action.payload.items;
      state.total = action.payload.total;
    });
  },
});

export { reducer, sliceActions };
export const actions = { ...sliceActions, fetchProducts };
