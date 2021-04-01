import React from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.scss";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
