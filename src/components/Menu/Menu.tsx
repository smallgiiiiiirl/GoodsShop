import { useNavigate } from "react-router-dom"
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import "./Menu.scss"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { menuSelectors } from "../Menu"
import { actions as menuActions } from "./menuSlice";
import { useAppDispatch } from "store/rootStore";


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
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const items2 = [getItem("Все товары", "sub1", categories.map((category) => getItem(category.label, category.type)))];

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
        items={items2} className="menu" />
}

