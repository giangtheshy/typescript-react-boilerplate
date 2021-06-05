import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Typography.Title level={1} type="success">
        Home
      </Typography.Title>
      <Link to="/products" type="success">
        products page
      </Link>
    </div>
  );
};

export default Home;
