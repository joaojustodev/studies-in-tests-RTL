import React, { PropsWithChildren } from "react";
import AsideMenu from "../../AsideMenu";
import AsideMenuMobile from "../../AsideMenuMobile";
import Header from "../../Header";
import MobileMenu from "../../MobileMenu";

import * as S from "./styles";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <S.Container>
        <Header />
        <AsideMenu />
        <AsideMenuMobile />
        {children}
        <MobileMenu />
      </S.Container>
    </>
  );
};

export default Layout;
