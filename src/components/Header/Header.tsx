import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link } from 'react-router-dom';
import input_wrap from "./Header.module.css"
import inputStyles from "./Header.module.css"


const { Search } = Input

const onSearch = (value: string) => console.log(value);
export const Header = () => {
    return (
        <div className={input_wrap.input_wrap}>
            <Link to="/"><img src='../../images/logo.png' alt='Logo' width="100" height="100"></img></Link>
            <Search placeholder="input search text" onSearch={onSearch} enterButton className={inputStyles.input_element} />
        </div>
    )
}


