import styles from "../styles/Home.module.scss";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ibrahim Aliu</title>
      </Head>
      <div className={styles.texts}>
        <h2>Welcome to my Personal Website</h2>
        <ul>
          <li>
            I deliver professional web and mobile apps using latest technologies
            and best practices
          </li>
          <li>I work as freelance photographer to capture the beauty</li>
          <li>
            I create digital artworks combining multiple beauties and feelings
            in one frame using Photoshop
          </li>
          <li>I like expressing my feelings in poems (turkish only)</li>
        </ul>
      </div>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={styles.cardsContainer}
      >
        <Link href="/programming">
          <Grid item xs={12} sm={6} md={3} className={styles.cardContainer}>
            <div className={styles.bgImgProgramming} />
            <span className={styles.title}>Programming</span>
          </Grid>
        </Link>
        <Grid item xs={12} sm={6} md={3}>
          <a
            className={styles.cardContainer}
            href="https://500px.com/p/ibrahim94ali?view=photos"
            target="_blank"
            rel="noopener"
          >
            <div className={styles.bgImgPhotography} />
            <span className={styles.title}>Photography</span>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <a
            className={styles.cardContainer}
            href="https://instagram.com/ibrahim94aliph"
            target="_blank"
            rel="noopener"
          >
            <div className={styles.bgImgDigitalArt} />
            <span className={styles.title}>Digital Art</span>
          </a>
        </Grid>
        <Link href="/damla-damla-ask">
          <Grid item xs={12} sm={6} md={3} className={styles.cardContainer}>
            <div className={styles.bgImgPoetry} />
            <span className={styles.title}>Damla Damla Ask</span>
          </Grid>
        </Link>
      </Grid>
    </div>
  );
}
