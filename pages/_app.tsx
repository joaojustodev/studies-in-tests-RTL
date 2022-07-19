import type { AppProps } from "next/app";
import { globalStyles } from "../stitches.config";
import { AsideMenuContextProvider } from "../contexts/AsideMenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AsideMenuContextProvider>
      <Component {...pageProps} />
      {globalStyles()}
    </AsideMenuContextProvider>
  );
}

export default MyApp;
