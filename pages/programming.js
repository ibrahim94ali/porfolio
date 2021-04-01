import Head from "next/head";
import React from "react";
import styles from "../styles/Programming.module.scss";

export default function Programming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ibrahim Aliu Programming</title>
      </Head>
      <h1 className={styles.title}>Programming</h1>
    </div>
  );
}
