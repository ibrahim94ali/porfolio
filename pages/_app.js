import "../styles/globals.scss";
import Layout from "../components/Layout";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333533",
    },
    secondary: {
      main: "#f5edf0",
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
