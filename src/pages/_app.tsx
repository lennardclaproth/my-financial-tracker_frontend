import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/Theme";
import Layout from "../layouts/Layout";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <link
        href="http://fonts.cdnfonts.com/css/tiempos-headline"
        rel="stylesheet"
      />
      <link href="http://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
