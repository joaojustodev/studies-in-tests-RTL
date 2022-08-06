import "../styles/main.scss";
import React from "react";
import type { AppProps } from "next/app";
import { globalStyles } from "../../stitches.config";
import { AsideMenuContextProvider } from "../contexts/AsideMenuContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AsideMenuContextProvider>
        <Component {...pageProps} />
        {globalStyles()}
      </AsideMenuContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
