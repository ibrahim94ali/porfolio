import React from "react";
import styles from "../styles/Badge.module.scss";

function Badge({ label, link }) {
  return (
    <div className={styles.container}>
      <a href={link}>{label}</a>
    </div>
  );
}

export default Badge;
