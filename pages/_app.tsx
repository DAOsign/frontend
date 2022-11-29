import type { AppProps } from "next/app";
import { createClient, Provider as GraphqlProvider } from "urql";
import { ThemeProvider } from "theme-ui";
import LockProvider from "../modules/lockProvider";
import AuthProvider from "../modules/authProvider";
import { theme } from "../theme";
import "../styles/globals.css";

const client = createClient({
  url: String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphqlProvider value={client}>
      <LockProvider>
        <AuthProvider>
          <ThemeProvider >
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </LockProvider>
    </GraphqlProvider>
  );
}

export default MyApp;
