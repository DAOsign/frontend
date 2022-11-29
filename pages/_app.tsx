import type { AppProps } from "next/app";
import LockProvider from "../modules/lockProvider";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LockProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LockProvider>
  );
}

export default MyApp;
