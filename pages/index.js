import styles from "../styles/Home.module.scss";
import { Grid, Link } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headersContainer}>
          <h1>Ibrahim Aliu</h1>
          <h2>
            Welcome to my page.
            <br />
            Choose what you want to learn about me below.
          </h2>
          <div>
            <Link href="/about">
              <button className="btn-primary">About me</button>
            </Link>
            <Link href="/contact">
              <button className="btn-primary" style={{ marginLeft: "1rem" }}>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={styles.cardsContainer}
      >
        <Grid item>
          <div className={styles.programmingCard}>
            <Link href="/programming">
              <button
                className={"btn-primary"}
                style={{ marginBottom: "2rem" }}
              >
                Programming
              </button>
            </Link>
          </div>
        </Grid>
        <Grid item>
          <div className={styles.photographyCard}>
            <Link href="/photography">
              <button
                className={"btn-primary"}
                style={{ marginBottom: "2rem" }}
              >
                Photography
              </button>
            </Link>
          </div>
        </Grid>
        <Grid item>
          <div className={styles.artworkCard}>
            <Link href="/digital-art">
              <button
                className={"btn-primary"}
                style={{ marginBottom: "2rem" }}
              >
                Digital Art
              </button>
            </Link>
          </div>
        </Grid>
        <Grid item>
          <div className={styles.poetryCard}>
            <Link href="/poetry">
              <button
                className={"btn-primary"}
                style={{ marginBottom: "2rem" }}
              >
                Poetry
              </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
