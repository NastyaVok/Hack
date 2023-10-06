
import { onClick } from '../model/changePath';
import { items } from '../constants';
import { Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const menuList = () => {

    return (
<Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    )
}


