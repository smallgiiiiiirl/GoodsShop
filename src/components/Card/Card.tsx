import "./Card.scss"
import cardImage from "../../images/cookie.jpeg"
import 'antd/dist/reset.css';
import { Button } from "antd";
import { FC, Fragment, useState } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "store/rootStore";
import { actions } from "pages/Basket/BasketSlice";
import { getGoods } from "pages/MainPage/mainSelector";
import { mainSelectors } from "pages/MainPage";
import { Good } from "types/types";
import { boolean } from "yup";


export const Card = (props: { good: Good, inBasket?: boolean }) => {
    const [size, setSize] = useState<SizeType>('middle');
    const [count, setCount] = useState(0)
    const addToCart = useSelector((state: RootStore) => state.basket.goods)
    const products = useSelector(mainSelectors.getGoods)
    const dispatch = useDispatch()
    return (
        <NavLink to={`${props.good.id}`}>
            {<div className="card__wrapper">
                <div className="card" >
                    <img alt="product" src={props.good.img} className="img" />
                    <p className="label">{props.good.label}</p>
                    <p className="price">{props.good.price}</p>
                    <div className="btnWrap">
                        {(count > 0) ? <Fragment>
                            <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                                e.preventDefault()
                                setCount(count - 1)
                                dispatch(actions.decrementCounter(props.good.id))
                            }}  >-</Button>
                            <span className="counter">{count}</span>
                            <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                                e.preventDefault()
                                setCount(count + 1)
                                dispatch(actions.incrementCounter(props.good.id))
                            }}>+</Button>
                        </Fragment>
                            : !props.inBasket && <Button type="primary" size={size} className="btn" onClick={(e) => {
                                e.preventDefault()
                                setCount(1)
                                dispatch(actions.addToBasket({
                                    good: props.good,
                                    count: 1,
                                }))
                            }}>
                                Добавить в корзину
                            </Button >
                        }
                    </div>
                </div>
            </div>}
        </NavLink >)
}