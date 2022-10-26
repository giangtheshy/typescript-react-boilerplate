import React, { FC, PropsWithChildren, Suspense } from "react";
import { Theme } from "../../../config/constant/enum";

const CustomThemeApp: FC<PropsWithChildren> = ({ children }) => {
  const LightThemeComponent = React.lazy(() => import("./LightApp"));
  const DarkThemeComponent = React.lazy(() => import("./DarkApp"));
  const curTheme = localStorage.theme == Theme.DARK ? Theme.DARK : Theme.LIGHT;
  return (
    <>
      {curTheme == Theme.DARK && (
        <Suspense fallback={<div>Loading...</div>}>
          <DarkThemeComponent>{children}</DarkThemeComponent>
        </Suspense>
      )}
      {curTheme == Theme.LIGHT && (
        <Suspense fallback={<div>Loading...</div>}>
          <LightThemeComponent>{children}</LightThemeComponent>
        </Suspense>
      )}
    </>
  );
};

export default CustomThemeApp;
