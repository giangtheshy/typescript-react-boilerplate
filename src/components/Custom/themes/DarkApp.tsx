import React, { FC, PropsWithChildren } from "react";
import "antd/dist/antd.dark.less";

const DarkApp: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default DarkApp;
