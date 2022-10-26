import React, { FC, PropsWithChildren, useState } from "react";
import "./LayoutAdmin.less";

import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import theme from "../../config/theme";
import HeaderCustom from "../Header/HeaderCustom";
import Logo from "../Custom/Logo";
import { useNavigate } from "react-router";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [getItem("Tom", "3"), getItem("Bill", "4"), getItem("Alex", "5")]),
  getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", "8")]),
  getItem("Files", "9", <FileOutlined />),
];

const LayoutAdmin:FC<PropsWithChildren> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  

  return (
    <Layout   style={{ minHeight: "100vh" }}>
      <Sider theme={theme} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Logo onClick={()=>navigate('/')} />
        <Menu theme={theme} defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <HeaderCustom/>
        <Content style={{ margin: "0 16px" }}>
          
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>HPT Corporation©2022 Created by HAS</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
