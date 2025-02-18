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
            I’m <strong>Ibrahim Aliu</strong>, a{" "}
            <strong>computer engineer</strong> with a passion for crafting{" "}
            <strong>web and mobile applications</strong> that seamlessly blend
            functionality with aesthetics.
          </p>

          <p>
            My journey has been shaped by a relentless pursuit of turning ideas
            into tangible experiences. Every project I undertake is an
            opportunity to refine my thoughts, transform them into meaningful
            work, and present them in the most compelling way possible.
          </p>

          <p>
            I like to think of myself as a <strong>complex system</strong>,
            constantly processing multiple inputs—experiences, knowledge, and
            creativity—to produce something uniquely my own. This is not just
            what I do; it’s what I love.
          </p>

          <h2>A Journey Through Creativity</h2>
          <p>
            Since childhood, I have been drawn to{" "}
            <strong>artistic expression</strong> in various forms. My love for
            poetry led me to recite to large audiences, giving voice to emotions
            and ideas that resonated deeply. As I grew, this passion evolved
            into writing my own poetry, capturing thoughts in lyrical form.
          </p>

          <p>
            During my teenage years, I discovered <strong>digital art</strong>{" "}
            through <strong>Photoshop</strong>, where I explored the power of
            blending multiple images to create visually captivating
            compositions. When I got my first <strong>camera</strong>, I fell in
            love with <strong>photography</strong>, focusing on capturing the
            beauty of a moment and refining it through meticulous{" "}
            <strong>post-processing</strong>.
          </p>

          <p>
            Creativity, attention to detail, and a deep appreciation for
            craftsmanship define everything I do. I believe that the smallest
            details are what truly make a creation shine.
          </p>

          <h2>Engineering as an Art Form</h2>
          <p>
            My love for problem-solving and innovation led me to{" "}
            <strong>computer engineering</strong>, a field where I can challenge
            myself daily with <strong>complex problems</strong> that require
            analytical thinking and creativity. Through coding, I bring
            structure to ideas, design intuitive user experiences, and
            continuously refine my skills to build better systems—both in
            software and in life.
          </p>

          <p>
            For me, engineering is not just about writing code; it’s about
            creating, refining, and constantly evolving. And that’s exactly what
            I strive to do every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
