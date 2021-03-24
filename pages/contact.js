import React from "react";
import { GitHub, Email, LinkedIn } from "@material-ui/icons";
import styles from "../styles/Contact.module.scss";
import { Link } from "@material-ui/core";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.iconsContainer}>
        <Link href="mailto:94ibrahimali@gmail.com?subject=Hiring%20You&body=Hi%20Ibrahim.%20We%20would%20like%20to%20hire%20you.">
          <Email color="secondary" className={styles.icon} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ibrahim-aliu-01411b153"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn color="secondary" className={styles.icon} />
        </Link>
        <Link
          href="https://github.com/ibrahim94ali"
          target="_blank"
          rel="noopener"
        >
          <GitHub color="secondary" className={styles.icon} />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
