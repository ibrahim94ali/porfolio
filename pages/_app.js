import "../styles/globals.scss";
import Layout from "../components/Layout";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Head from "next/head";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4A4E69",
    },
    secondary: {
      main: "#f2e9e4",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="Description"
          content="Ibrahim Aliu's personal website. He is a full stack programmer, photographer, digital artist, poet."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
