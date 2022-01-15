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
        <div className={styles.profilePhoto}></div>
        <div className={styles.textContainer}>
          <h1>About Me</h1>
          <p>
            I am <b>Ibrahim Aliu</b>, a computer engineer who has specializied
            in creating web and mobile applications.
          </p>
          <p>
            <b>
              I have spent all my time and effort to process my thoughts and
              work, and then present it in the most beautiful way for other
              people.
            </b>
          </p>
          <p>
            I like to think of me as a complex system to combine multiple inputs
            and produce my own output.
          </p>
          <p>This is what I love to do, and I do it in many forms.</p>
          <p>
            Since my childhood, I loved to read poems to big audiences. After my
            personality growth, I began expressing my feelings and thoughts in
            poems.
          </p>
          <p>
            Then, in my teenage times I learned Photoshop. I started to create
            digital art with manipulating multiple photos in a single frame to
            produce the most visaually satisfying artwork.
          </p>
          <p>
            When I got a camera, I started enjoying to capture the beauty in a
            frame and pay attention to details in photoshoot and then in
            postprocessing.
          </p>
          <p>
            <b>
              I love doing things that require creativity, wit and spending time
              in details, because little details are what makes it shine.
            </b>
          </p>
          <p>
            I chose to study computer engineering where I can push myself more
            to solve new and complex problems everyday. This way, I am getting
            to improve my system more and it helps me in other fields of life
            too.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
