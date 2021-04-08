import React from "react";
import styles from "../styles/Footer.module.scss";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import CVIcon from "@material-ui/icons/Description";

function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.copyright}>
        © {new Date().getFullYear()} - Ibrahim Aliu. All rights reserved.
      </span>

      <a
        className={styles.emailContainer}
        href="mailto:94ibrahimali@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <EmailIcon
          color="secondary"
          className={styles.emailIcon}
          fontSize="large"
        />
        <span className={styles.email}>94ibrahimali@gmail.com</span>
      </a>
      <nav className={styles.links}>
        <a
          href="https://linkedin.com/in/ibrahim-aliu-01411b153"
          target="_blank"
          rel="noopener"
          className={styles.socialLink}
        >
          <LinkedInIcon color="secondary" className={styles.socialIcon} />
        </a>
        <a
          href="https://instagram.com/ibrahim94ali"
          target="_blank"
          rel="noopener"
          className={styles.socialLink}
        >
          <InstagramIcon color="secondary" className={styles.socialIcon} />
        </a>
        <a
          href="https://twitter.com/ibrahim_ali__"
          target="_blank"
          rel="noopener"
          className={styles.socialLink}
        >
          <TwitterIcon color="secondary" className={styles.socialIcon} />
        </a>
        <a
          href="https://github.com/ibrahim94ali"
          target="_blank"
          rel="noopener"
          className={styles.socialLink}
        >
          <GithubIcon color="secondary" className={styles.socialIcon} />
        </a>
        <a
          href="https://drive.google.com/file/d/1yCwHxw7H-GvGizFR_93rVU48iHcxeG2j"
          target="_blank"
          rel="noopener"
          className={styles.socialLink}
        >
          <CVIcon color="secondary" className={styles.socialIcon} />
        </a>
      </nav>
    </div>
  );
}

export default Footer;
