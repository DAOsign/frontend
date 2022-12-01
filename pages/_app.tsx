import type { AppProps } from "next/app";
import { createClient, Provider as GraphqlProvider } from "urql";
import { ThemeProvider } from "theme-ui";
import LockProvider from "../modules/lockProvider";
import AuthProvider from "../modules/authProvider";
import { theme } from "../theme";
import "../styles/globals.css";
import { getToken } from "../utils/token";
import Layout from "../components/Layout";

const client = createClient({
  url: String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT),
  fetchOptions: () => {
    let token = getToken() || "";
    return { headers: { authorization: token } };
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const Page = () => {
    //@ts-ignore
    const hasLayout = !Component?.noLayout;
    return hasLayout ? (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    ) : (
      <Component {...pageProps} />
    );
  };

  return (
    <GraphqlProvider value={client}>
      <LockProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Page />
          </ThemeProvider>
        </AuthProvider>
      </LockProvider>
    </GraphqlProvider>
  );
}

export default MyApp;
