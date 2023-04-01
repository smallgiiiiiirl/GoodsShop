import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addToBasket, getToBasket } from "api/api";
import { GoodInCart, LOAD_STATUSES } from "types/types";

const SLICE_NAME = "basket";

const fetchToGetBasket = createAsyncThunk(SLICE_NAME, getToBasket);

const fetchAddGoodInBasket = createAsyncThunk(
  `${SLICE_NAME}/addGoodInCart`,
  async (body: GoodInCart, thunkAPI) => {
    const response = await addToBasket(body);
    // thunkAPI.dispatch(fetchToGetBasket())
    return response;
  }
);

export interface State {
  goods: GoodInCart[];
  loadStatus: LOAD_STATUSES;
}

export const initialState: State = {
  goods: [],
  loadStatus: LOAD_STATUSES.UNKNOWN,
};
const { reducer, actions: sliceActions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const goodInCart = state.goods.find(
        (item) => item.good.id === action.payload.good.id
      );
      goodInCart
        ? goodInCart.count++
        : state.goods.push({
            ...action.payload.good,
            count: action.payload.count,
          });
    },
    incrementCounter: (state, action) => {
      const item = state.goods.find(
        (item) => item.good.id !== action.payload.good.id
      );
      item!.count++;
    },
    decrementCounter: (state, action) => {
      const item = state.goods.find(
        (item) => item.good.id !== action.payload.good.id
      );
      if (item?.count === 1) {
        item.count = 0;
      } else {
        item!.count--;
      }
    },
    removeGood: (state, action) => {
      const removeItem = state.goods.filter(
        (item) => item.good.id !== action.payload.good.id
      );
      state.goods = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToGetBasket.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });

    builder.addCase(fetchToGetBasket.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });

    builder.addCase(fetchToGetBasket.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.goods = action.payload;
    });

    builder.addCase(fetchAddGoodInBasket.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });

    builder.addCase(fetchAddGoodInBasket.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });

    builder.addCase(fetchAddGoodInBasket.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.goods = action.payload;
    });
  },
});

export { reducer, sliceActions };
export const actions = {
  ...sliceActions,
  fetchAddGoodInBasket,
  fetchToGetBasket,
};
