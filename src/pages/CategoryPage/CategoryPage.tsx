import { CATEGORY_GOODS } from "mockData"
import { Link } from "react-router-dom"
import categoryStyles from "./CategoryPage.module.css"
export const CategoryPage = () => {
    return (<ul className={categoryStyles.goods_ul}>
        {CATEGORY_GOODS.map((good) => <li >{good}</li>)}
    </ul>)
}