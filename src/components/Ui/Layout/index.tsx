import React, { PropsWithChildren } from "react";
import AsideMenu from "../../AsideMenu";
import AsideMenuMobile from "../../AsideMenuMobile";
import Header from "../../Header";
import MenuBar from "../../MenuBar";

import * as S from "./styles";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <AsideMenu />
      <S.Main>{children}</S.Main>
      <AsideMenuMobile />
      <MenuBar />
    </S.Container>
  );
};

export default Layout;
