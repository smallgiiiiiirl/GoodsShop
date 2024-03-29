import { useNavigate } from "react-router-dom"
import { Card, MenuProps } from 'antd';
import { Menu } from 'antd';
import "./Menu.scss"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { menuSelectors } from "../Menu"
import { actions as menuActions } from "./menuSlice";
import { useAppDispatch } from "store/rootStore";
import { mainSelectors } from "pages/MainPage";
import { actions } from "pages/MainPage/mainSlice";
import { Good } from "types/types";


type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

export const SideBar = (props: { name: string, path: string, id: string, type: string, label: string }) => {
    const categories = useSelector(menuSelectors.getCategories)
    const products = useSelector(mainSelectors.getGoods)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const items = [getItem("Все товары", "sub1", categories.map((category) => getItem(category.label, category.type)))];
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/main/${e.key}`)
    }

    useEffect(() => {
        dispatch(menuActions.fetchMenu())
    }, [])

    return <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items} className="menu" />
}

