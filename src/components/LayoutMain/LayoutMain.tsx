import { Fragment } from "react"
import { Outlet } from "react-router"
import { Menu } from "../Menu"
import layoutMain from "./LayoutMain.module.css"

export const LayoutMain = () => {
    return (
        <div className={layoutMain.wrapper}>
            <Menu />
            <Outlet />
        </div>

    )
}