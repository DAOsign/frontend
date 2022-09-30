import type { AppProps } from "next/app";
import LockProvider from "../modules/lockProvider";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LockProvider>
      <Component {...pageProps} />
    </LockProvider>
  );
}

export default MyApp;
