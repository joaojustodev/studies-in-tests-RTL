import React from "react";
import { useContext } from "react";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";
import * as S from "./styles";

const AsideMenu = () => {
  const { asideMenuCycle } = useContext(AsideMenuContext);

  return (
    <>
      <S.Container
        initial={{ width: 0 }}
        animate={{ width: asideMenuCycle }}
        transition={{ ease: "linear", duration: 0.05 }}
        role="menu"
        aria-label="Menu lateral"
        title="Menu lateral"
      >
        {asideMenuCycle && (
          <S.AsideMenuContent>
            <ul style={{ padding: "10px " }}>
              <li style={{ height: "100px" }}>TESTANDO MENU</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
            </ul>
          </S.AsideMenuContent>
        )}
      </S.Container>
    </>
  );
};

export default AsideMenu;
