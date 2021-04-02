import React from "react";
import Head from "next/head";
import styles from "../styles/About.module.scss";

function About() {
  return (
    <div>
      <Head>
        <title>About Ibrahim Aliu</title>
      </Head>
      <div className={styles.container}>
        <h1>About Me</h1>
      </div>
    </div>
  );
}

export default About;
