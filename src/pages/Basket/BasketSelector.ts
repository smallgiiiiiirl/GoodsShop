import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "store/rootStore"
import {State} from "./BasketSlice"
import { LOAD_STATUSES } from "types/types"

export const getBasketSlice =(state: RootStore):State=> state.basket

export const getGoodsCard = (state: RootStore): State["goods"]=> getBasketSlice(state).goods

export const getLoadStatus = (state: RootStore): State["loadStatus"]=> getBasketSlice(state).loadStatus

export const getIsLoading = (state: RootStore): boolean => getLoadStatus(state) === LOAD_STATUSES.LOADING