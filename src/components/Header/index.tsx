import React, { useContext, useState } from "react";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";
import { MenuButton } from "../Ui/MenuButton";
import * as S from "./styles";

const Header = () => {
  const {
    handleAsideMenuCycle,
    setAsideMenuMobileCycle,
    asideMenuCycle,
    asideMenuMobileCycle,
  } = useContext(AsideMenuContext);

  return (
    <S.Container>
      <S.LogoBox>
        <MenuButton
          css={{
            display: "none",
            "@bp2": {
              display: "block",
            },
          }}
          type="button"
          title={asideMenuCycle ? "Fechar menu lateral" : "Abrir menu lateral"}
          aria-label={
            asideMenuCycle ? "Fechar menu lateral" : "Abrir menu lateral"
          }
          onClick={handleAsideMenuCycle}
        />
        <MenuButton
          css={{
            display: "none",
            "@bp1": {
              display: "block",
            },
            "@bp2": {
              display: "none",
            },
          }}
          type="button"
          title={
            asideMenuMobileCycle
              ? "Fechar menu mobile lateral"
              : "Abrir menu mobile lateral"
          }
          aria-label={
            asideMenuMobileCycle
              ? "Fechar menu mobile lateral"
              : "Abrir menu mobile lateral"
          }
          onClick={() => setAsideMenuMobileCycle()}
        />

        <h1>Logo</h1>
      </S.LogoBox>
    </S.Container>
  );
};

export default Header;
