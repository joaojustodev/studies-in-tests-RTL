import React from "react";
import { render } from "@testing-library/react";
import { AsideMenuContextProvider } from "../../contexts/AsideMenuContext";

export const renderWithContext = (children: React.ReactNode) => {
  return render(
    <AsideMenuContextProvider>{children}</AsideMenuContextProvider>
  );
};
