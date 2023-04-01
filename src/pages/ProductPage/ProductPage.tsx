import { Button } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext";
import { actions as basketActions } from "pages/Basket/BasketSlice";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useAppDispatch } from "store/rootStore";
import "./ProductPage.scss"
import { actions } from "./ProductPageSlice";
import { productPageSelector } from ".";

export const ProductPage = (props: { inBasket?: boolean }) => {
    const [size, setSize] = useState<SizeType>('middle');
    const [count, setCount] = useState(0)
    const good = useSelector(productPageSelector.getProduct)
    const loadstatus = useSelector(productPageSelector.getLoadStatus)
    const dispatch = useAppDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(actions.fetchOnProductPage(id!))
    }, [id])
    return (
        <div className="product_page__wrapper">
            <img alt="product" src={good!.img} className="product__img" />
            <div className="product__information">
                <Fragment>
                    <h2 className="product__label">{good!.label}</h2>
                    <p className="product__description">{good!.description}</p>
                </Fragment>

                <div className="btnWrap">
                    {(count > 0) ? <Fragment>
                        <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                            e.preventDefault()
                            setCount(count - 1)
                            // dispatch(basketActions.decrementCounter())
                        }}  >-</Button>
                        <span className="counter">{count}</span>
                        <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                            e.preventDefault()
                            setCount(count + 1)
                            dispatch(basketActions.incrementCounter(""))
                        }}>+</Button>
                    </Fragment>
                        : !props.inBasket && <Button type="primary" size={size} className="btn" onClick={(e) => {
                            e.preventDefault()
                            setCount(1)
                            dispatch(basketActions.addToBasket(''))
                        }}>
                            Добавить в корзину
                        </Button >
                    }
                    <h3 className="product__price">{good!.price}</h3>
                </div>

            </div>
        </div>
    )
}