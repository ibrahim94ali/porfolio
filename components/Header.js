import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>Welcome</a>
      </Link>
      <Link href="/about">
        <a>About me</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/programming">
        <a>Programming</a>
      </Link>
      <Link href="/photography">
        <a>Photography</a>
      </Link>
      <Link href="/digital-art">
        <a>Digital Art</a>
      </Link>
      <Link href="/poetry">
        <a>Poetry</a>
      </Link>
    </nav>
  );
}

export default Header;
