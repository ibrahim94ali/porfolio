import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.name}>Ibrahim Aliu</h1>
      </Link>
      <nav className={styles.links}>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/programming">
          <a className={styles.link}>Programming</a>
        </Link>
        <a
          href="https://500px.com/p/ibrahim94ali?view=photos"
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          <span>Photography</span>
        </a>
        <a
          href="https://instagram.com/ibrahim94aliph"
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          <span>Digital Art</span>
        </a>
        <a
          href="https://www.instagram.com/explore/tags/ibrahim94ali"
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          <span>Poetry</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
