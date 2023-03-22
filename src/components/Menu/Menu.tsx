import { Link, useNavigate } from "react-router-dom"
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import "./Menu.scss"


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

const items: MenuItem[] = [
    getItem('Все товары', 'sub1', [
        getItem("Продукты", "products"),
        getItem('Косметика ', 'cosmetis'),
        getItem('Творчество', 'art'),
        getItem('Сувениры ', 'souvenirs'),
        getItem('Дом ', 'house'),
        getItem('Книги ', 'books'),
        getItem('Канцтовары ', 'stationery'),
        getItem('Туризм ', 'tourism'),
        getItem('Здоровье ', 'health'),
    ]),
]

export const SideBar = (props: { name: string, path: string }) => {

    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/main/${e.key}`)
    }
    return <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items} className="menu" />
}