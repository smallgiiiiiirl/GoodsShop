import { stat } from "fs";
import { RootStore } from "store/rootStore";
import { LOAD_STATUSES } from "types/types";
import { State } from "./mainSlice";


export const getMainSlice =(state: RootStore):State=> state.main

export const getGoods = (state: RootStore): State["goods"]=> getMainSlice(state).goods

export const getTotal =(state: RootStore): State["total"]=> getMainSlice(state).total

export const getLoadStatus = (state: RootStore): State["loadStatus"]=> getMainSlice(state).loadStatus

export const getIsLoading = (state: RootStore): boolean => getLoadStatus(state) === LOAD_STATUSES.LOADING;