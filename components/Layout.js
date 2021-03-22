import React from "react";
import Header from "./Header";
import Menunav from "./Menunav";
import styles from "../styles/Layout.module.scss";
import { Hidden } from "@material-ui/core";

function Layout({ children }) {
  return (
    <>
      <Hidden mdUp>
        <Menunav />
      </Hidden>
      <Hidden smDown>
        <Header />
      </Hidden>
      <div className={styles.content}>{children}</div>
    </>
  );
}

export default Layout;
