import { Link } from "react-router-dom"
import { CATEGORIES } from "../../mockData"

const onClick = () => console.log(onClick)

export const Menu = () => {
    return (<ul>
        {CATEGORIES.map((el) => <li><Link to="/category_page">{el}</Link></li>)}
    </ul>)
}