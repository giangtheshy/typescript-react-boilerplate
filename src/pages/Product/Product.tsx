import { Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct, getProducts } from "../../store/actions/product.action";

const Product = () => {
  const products = useSelector((state: any) => state.product.products);
  const product = useSelector((state: any) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(`getProducts`));
    dispatch(getProduct(`getProduct/6065a9c22d071b20e8fa9eb6`));
  }, []);
  console.log(products);
  console.log(product);

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
