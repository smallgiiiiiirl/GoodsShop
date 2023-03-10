import { Fragment } from "react"
import { Outlet } from "react-router"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>

    )
}