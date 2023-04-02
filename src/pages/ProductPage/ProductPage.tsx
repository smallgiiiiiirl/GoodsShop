import { Button } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext";
import { actions as basketActions } from "pages/Basket/BasketSlice";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useAppDispatch } from "store/rootStore";
import "./ProductPage.scss"
import { actions } from "./ProductPageSlice";
import { getLoadStatus, getProduct } from "./productPageSelector";
import { getProducts } from "api/api";
import { Good } from "types/types";

export const ProductPage = (props: { inBasket?: boolean }) => {
    const [size, setSize] = useState<SizeType>('middle');
    const [product, setProduct] = useState<Good[]>([])
    const [count, setCount] = useState(0)
    const good = useSelector(getProduct)
    const loadstatus = useSelector(getLoadStatus)
    const dispatch = useAppDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(actions.fetchOnProductPage())
    }, [])

    useEffect(() => {
        if (id) {
            getProducts({ ids: id }).then((data) => setProduct(data.items))
        }
    }, [])
    const addToBasket = (e: any) => {
        e.preventDefault()
        setCount(1)
        dispatch(basketActions.addToBasket(""))
    }
    const incrementCount = (e: any) => {
        e.preventDefault()
        setCount(count + 1)
        dispatch(basketActions.incrementCounter(""))
    }

    const decrementCount = (e: any) => {
        e.preventDefault()
        setCount(count - 1)
        dispatch(basketActions.decrementCounter(""))
    }

    return (
        <div className="product_page__wrapper">
            <img alt="product" src={""} className="product__img" />
            <div className="product__information">
                <Fragment>
                    <h2 className="product__label">{ }</h2>
                    <p className="product__description">{ }</p>
                </Fragment>

                <div className="btnWrap">
                    {(count > 0) ? <Fragment>
                        <Button type="primary" size={size} className="btn__counter" onClick={decrementCount}>-</Button>
                        <span className="counter">{count}</span>
                        <Button type="primary" size={size} className="btn__counter" onClick={incrementCount}>+</Button>
                    </Fragment>
                        : !props.inBasket && <Button type="primary" size={size} className="btn" onClick={addToBasket}>
                            Добавить в корзину
                        </Button >
                    }
                    <h3 className="product__price">{ }</h3>
                </div>

            </div>
        </div>
    )
}


