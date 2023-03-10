import { CATEGORIES } from "../../mockData"



export const Menu = () => {
    return (<ul>
        {CATEGORIES.map((el) => <li>{el}</li>)}
    </ul>)
}