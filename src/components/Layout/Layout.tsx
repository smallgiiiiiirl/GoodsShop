import { Fragment } from "react"
import { Outlet } from "react-router"
import { Footer } from "../Footer"
import { Header } from "../Header"
import "./Layout.scss"

export const Layout = () => {
    return (
        <div className="сonteiner">
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}