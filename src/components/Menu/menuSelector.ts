import { RootStore } from "store/rootStore";
import { LOAD_STATUSES } from "types/types";
import { State } from "./menuSlice";

export const getMenuSlice = (state: RootStore): State=> state.menu

export const getCategories = (state: RootStore): State['categories']=> getMenuSlice(state).categories

export const getLoadStatus = (state: RootStore): State['loadStatus']=> getMenuSlice(state).loadStatus

export const getIsLoading = (state: RootStore): boolean => getLoadStatus(state) === LOAD_STATUSES.LOADING;


