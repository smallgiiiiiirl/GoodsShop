import "./Card.scss"
import cardImage from "../../images/cookie.jpeg"
import 'antd/dist/reset.css';
import { Button } from "antd";
import { useState } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { NavLink } from "react-router-dom";


export const Card = (props: { label: string, price: string, imgLink: string }) => {
    const [size, setSize] = useState<SizeType>('middle');
    return (
        <NavLink to={"/main/:categoryName/:productName"}>
            <div className="card__wrapper">
                <div className="card" >
                    <img alt="product" src={cardImage} className="img" />
                    <p className="label">{props.label}</p>
                    <p className="price">{props.price}</p>
                    <div className="btnWrap">
                        <Button type="primary" size={size} className="btn" onClick={(e) => e.preventDefault()}>
                            Добавить в корзину
                        </Button ></div>

                </div>
            </div>
        </NavLink>)
}