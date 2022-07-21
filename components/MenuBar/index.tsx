import React, { memo, useContext } from "react";
import Link from "next/link";
import { HouseSimple, List } from "phosphor-react";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";

import * as S from "./styles";

const MenuBar: React.FC = () => {
  const { setAsideMenuMobileCycle } = useContext(AsideMenuContext);

  return (
    <S.Container>
      <S.MenuBarList role="menu">
        <S.MenuBarListItem role="menuitem">
          <Link href="/" title="Ir para início" aria-label="Ir para início">
            <span className={S.MenuBarListItemButton()}>
              <HouseSimple size={26} /> Início
            </span>
          </Link>
        </S.MenuBarListItem>

        <S.MenuBarListItem role="menuitem">
          <button
            className={S.MenuBarListItemButton()}
            onClick={setAsideMenuMobileCycle}
            type="button"
            title="Abrir menu"
            aria-label="Abrir menu"
          >
            <List size={26} /> Menu
          </button>
        </S.MenuBarListItem>
      </S.MenuBarList>
    </S.Container>
  );
};

export default memo(MenuBar);
