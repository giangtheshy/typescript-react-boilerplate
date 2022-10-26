import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const CheckLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return <div>Redirect Login</div>;
};

export default CheckLogin;
