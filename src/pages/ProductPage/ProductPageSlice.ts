import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "api/api";
import { Good, LOAD_STATUSES } from "types/types";

const SLICE_NAME = "productCard";

const fetchOnProductPage = createAsyncThunk(SLICE_NAME, getProducts);

export interface State {
  good: Good[];
  loadStatus: LOAD_STATUSES;
}

export const initialState: State = {
  good: [],
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const { reducer, actions: sliceActions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOnProductPage.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchOnProductPage.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
    builder.addCase(fetchOnProductPage.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.good = action.payload.items;
    });
  },
});

export { reducer, sliceActions };
export const actions = { ...sliceActions, fetchOnProductPage };
