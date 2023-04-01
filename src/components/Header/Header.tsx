import { AudioOutlined, createFromIconfontCN } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import "./Header.scss"
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { Button, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useState } from 'react';

const { Search } = Input

const onSearch = (value: string) => console.log(value);
export const Header = () => {
    const [size, setSize] = useState<SizeType>('middle');
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });
    return (
        <div className="header">
            <Link to="/"><LogoIcon className="logo" /></Link>
            <Search placeholder="Search on..." onSearch={onSearch} enterButton className="input_element" />
            <div className="btnWrap"><Button type="primary" size={size} className="btn">
                Войти
            </Button></div>
            <Link to="/basket"><Button type="primary" size={size} className='basket__btn'><IconFont type="icon-shoppingcart" className='basket' />Корзина: 0 byn</Button></Link>
        </div>
    )
}


