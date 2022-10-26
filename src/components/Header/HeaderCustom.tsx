import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../config/theme";
import Logo from "../Custom/Logo";
import "./Header.less";

const HeaderCustom = () => {
  const [tab, setTab] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setTab(location.pathname);
  }, []);
  const handleClickTab = (value: string) => {
    navigate(value);
    setTab(value);
  };
  return (
    <Header className="header">
    
      <Menu theme={theme} mode="horizontal" defaultSelectedKeys={[tab]} selectedKeys={[tab]}>
        <Menu.Item key="/posts" onClick={() => handleClickTab("/posts")}>
          Posts
        </Menu.Item>
        <Menu.Item key="/products" onClick={() => handleClickTab("/products")}>
          Products
        </Menu.Item>
        <Menu.Item key="/login" onClick={() => handleClickTab("/login")}>
          Login
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderCustom;
