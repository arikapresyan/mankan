import React from 'react';

import  Menu from 'antd/lib/menu';
import  Divider from 'antd/lib/divider';

const ProfileIcon = '/images/icons/profile_img.png';
const { SubMenu } = Menu;

function MobileMenu() {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={(
          <span>
            <img src={ProfileIcon} alt="" className="menu_icon" />
            <span>Navigation One</span>
          </span>
                  )}
      >
        <Menu.ItemGroup key="1" title="Item 1">
          <Menu.Item key="1.1">Option 1</Menu.Item>
          <Menu.Item key="1.2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Divider />
      <SubMenu
        key="sub2"
        title={(
          <span>
            <img src={ProfileIcon} alt="" className="menu_icon" />
            <span>Navigation Two</span>
          </span>
                  )}
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Divider />
      <SubMenu
        key="sub4"
        title={(
          <span>
            <img src={ProfileIcon} alt="" className="menu_icon" />
            <span>Navigation Three</span>
          </span>
                  )}
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default MobileMenu;
