import { Button } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import cardImage from "../../images/cookie.jpeg"
import "./ProductPage.scss"

export const ProductCard = (props: { id: string, imgLink: string, price: string, label: string, description: string }) => {
    const [size, setSize] = useState<SizeType>('middle');
    return (
        <div className="product_page__wrapper">
            <img alt="product" src={cardImage} className="product__img" />
            <div className="product__discription">
                <p>label</p>
                <p>price</p>
                <div className="btnWrap">
                    <Button type="primary" size={size} className="btn">
                        Добавить в корзину
                    </Button >
                </div>
            </div>
            <p>description</p>
        </div>
    )
}