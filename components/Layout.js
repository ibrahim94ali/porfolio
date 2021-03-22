import React from "react";
import Header from "./Header";
import MenuNav from "./MenuNav";
import styles from "../styles/Layout.module.scss";
import { Hidden } from "@material-ui/core";

function Layout({ children }) {
  return (
    <>
      <Hidden mdUp>
        <MenuNav />
      </Hidden>
      <Hidden smDown>
        <Header />
      </Hidden>
      <div className={styles.content}>{children}</div>
    </>
  );
}

export default Layout;
