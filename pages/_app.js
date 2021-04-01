import "../styles/globals.scss";
import Layout from "../components/Layout";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>{" "}
    </ThemeProvider>
  );
}

export default MyApp;
