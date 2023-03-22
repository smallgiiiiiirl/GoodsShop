import { Card } from "components/Card"
import { GOODS } from "mockData"
import "./MainPage.scss"

// const {categoryName} = useParams()

export const MainPage = () => {
    return (<div className="main_page">
        {GOODS.map((good) => <Card label={good.label} price={good.price} imgLink={good.imgLink} />)}
    </div>)
}