import { useContext, useRef } from "react";
import { AnimatePresence, Variants } from "framer-motion";
import { AsideMenuContext } from "../../contexts/AsideMenuContext";
import React from "react";
import { Overlay } from "../Ui/Overlay";
import useOnClickOutside from "../../hooks/useOutsideClick";
import * as S from "./styles";

const asideMenuMobileMotionVariant: Variants = {
  hidden: {
    x: "-220px",
  },
  visible: {
    x: 0,
  },
};

const AsideMenuMobile = () => {
  const { asideMenuMobileCycle, setAsideMenuMobileCycle } =
    useContext(AsideMenuContext);
  const overlayRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(overlayRef, setAsideMenuMobileCycle, "mousedown");

  return (
    <AnimatePresence>
      <S.Container>
        {asideMenuMobileCycle && (
          <div
            className={Overlay({ css: { zIndex: 4 } })}
            ref={overlayRef}
            role="presentation"
            title="Clique para fehcar o menu"
            aria-label="Overlay menu mobile lateral"
          ></div>
        )}

        <S.AsideMenuMobileContent
          variants={asideMenuMobileMotionVariant}
          initial="hidden"
          animate={asideMenuMobileCycle ? "visible" : "hidden"}
          transition={{ duration: 0.2 }}
          role="menu"
          aria-label="Menu mobile lateral"
          title="Menu mobile lateral"
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
    </AnimatePresence>
  );
};

export default AsideMenuMobile;
