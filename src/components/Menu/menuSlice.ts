import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getCategories } from "api/api"
import { Category, LOAD_STATUSES } from "types/types"

const SLICE_NAME = "menu"

const fetchMenu = createAsyncThunk(SLICE_NAME, getCategories)

export interface State{
    loadStatus: LOAD_STATUSES,
    categories: Category[],
}

const initialState: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    categories: []
}
const {reducer, actions: sliceActions} = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMenu.pending, (state)=>{
            state.loadStatus = LOAD_STATUSES.LOADING
        })
        builder.addCase(fetchMenu.rejected, (state)=>{
            state.loadStatus = LOAD_STATUSES.ERROR
        })
        builder.addCase(fetchMenu.fulfilled, (state,action)=>{
            state.loadStatus = LOAD_STATUSES.LOADED
            state.categories = action.payload.categories
        })
    }
})

export {reducer, sliceActions}
export const actions = {...sliceActions, fetchMenu}
