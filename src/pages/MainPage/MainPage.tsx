import { Card } from "components/Card"
import { useEffect, useState } from "react"
import { actions } from "./mainSlice"
import "./MainPage.scss"
import { useAppDispatch } from "store/rootStore"
import { mainSelectors } from "../MainPage"
import { useSelector } from "react-redux"
import { Good } from "types/types"

// const {categoryName} = useParams()

export const MainPage = () => {
    const [params, setParams] = useState({
        page: 1,
        limit: 20
    })
    const products = useSelector(mainSelectors.getGoods)
    const total = useSelector(mainSelectors.getTotal)
    const loading = useSelector(mainSelectors.getIsLoading)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(actions.fetchProducts(params))
    }, [params, dispatch])

    return (<div className="main_page">
        {products.map((good) => <Card key={good.id} good={good} />)}
    </div>)
}