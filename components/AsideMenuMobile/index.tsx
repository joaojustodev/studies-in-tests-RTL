import { useContext, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";
import { Overlay } from "../Ui/Overlay";
import useOnClickOutside from "../../hooks/useOutsideClick";
import * as S from "./styles";

const AsideMenuMobile = () => {
  const { asideMenuMobileCycle, setAsideMenuMobileCycle } =
    useContext(AsideMenuContext);
  const overlayRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(overlayRef, setAsideMenuMobileCycle, "mousedown");

  return (
    <AnimatePresence>
      {asideMenuMobileCycle && (
        <S.Container>
          <div
            className={Overlay({ css: { zIndex: 4 } })}
            ref={overlayRef}
          ></div>

          <S.AsideMenuMobileContent
            initial={{ x: "-220px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul style={{ padding: "10px " }}>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
              <li style={{ height: "100px" }}>TESTANDO</li>
            </ul>
          </S.AsideMenuMobileContent>
        </S.Container>
      )}
    </AnimatePresence>
  );
};

export default AsideMenuMobile;
