import { Fragment } from "react"
import { Outlet } from "react-router"
import { SideBar } from "../Menu"
import "./LayoutMain.scss"

export const LayoutMain = () => {
    return (
        <div className="wrapper">
            <SideBar name={""} path={""} id={""} type={""} label={""} />
            <Outlet />
        </div>

    )
}