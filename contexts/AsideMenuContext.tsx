import React from "react";
import { createContext, FC, PropsWithChildren } from "react";
import { useCycle } from "framer-motion";

export type AsideMenuContextType = {
  asideMenuCycle: number;
  handleAsideMenuCycle(): void;
  asideMenuMobileCycle: boolean;
  setAsideMenuMobileCycle(): void;
};

export const AsideMenuContext = createContext({} as AsideMenuContextType);

export const AsideMenuContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [asideMenuCycle, setAsideMenuCycle] = useCycle(0, 220);
  const [asideMenuMobileCycle, setAsideMenuMobileCycle] = useCycle(false, true);

  function handleAsideMenuCycle() {
    setAsideMenuCycle();
  }

  return (
    <AsideMenuContext.Provider
      value={{
        asideMenuCycle,
        handleAsideMenuCycle,
        asideMenuMobileCycle,
        setAsideMenuMobileCycle,
      }}
    >
      {children}
    </AsideMenuContext.Provider>
  );
};
