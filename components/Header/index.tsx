import { useContext } from "react";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";
import { MenuButton } from "../Ui/MenuButton";
import * as S from "./styles";
import { List } from "phosphor-react";

const Header = () => {
  const { setAsideMenuCycle, setAsideMenuMobileCycle } =
    useContext(AsideMenuContext);
  return (
    <S.Container>
      <S.LogoBox>
        <button
          type="button"
          title="Abrir menu lateral"
          onClick={setAsideMenuCycle}
          className={MenuButton({
            css: {
              display: "none",
              "@bp2": {
                display: "block",
              },
            },
          })}
        >
          <List aria-hidden size={24} />
        </button>
        <button
          type="button"
          title="Abrir menu lateral"
          onClick={setAsideMenuMobileCycle}
          className={MenuButton({
            css: {
              display: "none",
              "@bp1": {
                display: "block",
              },
              "@bp2": {
                display: "none",
              },
            },
          })}
        >
          <List aria-hidden size={24} />
        </button>

        <h1>Logo</h1>
      </S.LogoBox>
    </S.Container>
  );
};

export default Header;
