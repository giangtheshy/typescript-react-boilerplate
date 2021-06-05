import { Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../store/actions/product.action";

const Product = () => {
  const products = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  if (products.length === 0) return <h1>Loading...</h1>;
  return (
    <div>
      <Link to="/" type="success">
        BACK HOME
      </Link>
    </div>
  );
};

export default Product;
