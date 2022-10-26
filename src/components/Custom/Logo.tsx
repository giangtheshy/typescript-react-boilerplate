import React from "react";
import { useNavigate } from "react-router-dom";
import "./Custom.less";

interface Props {
  onClick: (value: string) => void;
}
const Logo: React.FC<Props> = ({ onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    onClick("/");
  };
  return (
    <div className="logo">
      <img
        src="https://res.cloudinary.com/giangtheshy/image/upload/v1618495157/dev/khumuivietnam/nklkpnk9ydwx0p5ppiuk.png"
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
};

export default Logo;
