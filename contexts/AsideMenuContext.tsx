import { createContext, FC, PropsWithChildren } from "react";
import { useCycle } from "framer-motion";

type AsideMenuContextType = {
  asideMenuCycle: number;
  setAsideMenuCycle(): void;
  asideMenuMobileCycle: boolean;
  setAsideMenuMobileCycle(): void;
};

export const AsideMenuContext = createContext({} as AsideMenuContextType);

export const AsideMenuContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [asideMenuCycle, setAsideMenuCycle] = useCycle(0, 220);
  const [asideMenuMobileCycle, setAsideMenuMobileCycle] = useCycle(false, true);
  return (
    <AsideMenuContext.Provider
      value={{
        asideMenuCycle,
        setAsideMenuCycle,
        asideMenuMobileCycle,
        setAsideMenuMobileCycle,
      }}
    >
      {children}
    </AsideMenuContext.Provider>
  );
};
