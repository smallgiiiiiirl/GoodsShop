import "./Basket.scss"
import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Fragment, useEffect, useState } from 'react';
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { basketSelector } from ".";
import { actions as basketActions } from "./BasketSlice";
import { useAppDispatch } from "store/rootStore";


export const Basket = () => {
    const [count, setCount] = useState(0)
    const [size, setSize] = useState<SizeType>('middle');
    const goods = useSelector(basketSelector.getGoodsCard)
    const loadStatus = useSelector(basketSelector.getLoadStatus)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(basketActions.fetchToGetBasket())
    }, [])

    const totalCost = () => {
        return goods.reduce((totalCost, accum) => {
            return totalCost = accum.count * accum.good.price
        }, 0)
    }


    return <div className="basket__wrapper">
        <p className="basket__paragraph">Корзина заказов</p>
        <table>
            <tr>
                <th>Товар</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
            {(count === 0) ? <tr></tr> : <tr>

                {goods.map((good) => <Fragment>
                    <td><div className='goods__title__wrapper'><img alt='good' src={good.good.img} className="good_img" /> <p className='basket__good'>{good.good.label}</p></div></td>
                    <td>
                        <div className='goods__counter__wrapper'>
                            <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                                e.preventDefault()
                                setCount(count - 1)
                                // dispatch(basketActions.decrementQuantity())
                            }}><MinusOutlined /></Button>
                            <span className="counter">{count}</span>
                            <Button type="primary" size={size} className="btn__counter" onClick={(e) => {
                                e.preventDefault()
                                setCount(count + 1)
                                // dispatch(basketActions.incrementQuantity(""))
                            }}><PlusOutlined /></Button>
                        </div>
                    </td>
                    <td>
                        {good.good.price}
                        <button className='remove__btn' onClick={(e) => {
                            e.preventDefault()
                            dispatch(basketActions.removeGood(""))
                        }}><CloseOutlined /></button>
                    </td>
                </Fragment>)}
            </tr>}

        </table>
        <h2 className="total_cost">Итоговая стоимость:{ } byn</h2>
    </div>
}

