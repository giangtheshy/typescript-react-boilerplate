import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../Custom/Logo";
import "./Header.scss";

const HeaderCustom = () => {
  const [tab, setTab] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    setTab(history.location.pathname);
  }, []);
  const handleClickTab = (value: string) => {
    history.push(value);
    setTab(value);
  };
  return (
    <Header className="header">
      <Logo onClick={() => handleClickTab("/")} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[tab]} selectedKeys={[tab]}>
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
