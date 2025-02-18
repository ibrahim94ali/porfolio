import { Grid } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Experience from "../components/Experience";
import Project from "../components/Project";
import styles from "../styles/Programming.module.scss";
import { skills } from "./api/skills";
import { projects } from "./api/projects";
import { experiences } from "./api/experiences";

export default function Programming() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Ibrahim Aliu Programming</title>
      </Head>
      <div className={styles.texts}>
        <h2>Programming</h2>
        <h3 className={styles.subtitle}>
          A highly skilled <strong> software engineer </strong> with{" "}
          {currentYear - 2018}+ years of experience in{" "}
          <strong>web and mobile development.</strong>
          <br />
          Proficient in libraries like{" "}
          <strong> React, Angular, React Native, and Node.js.</strong>
          <br />
          Passionate about building high-quality, scalable, and user-friendly
          solutions.
          <br />
          What sets me apart is my{" "}
          <strong>ability to quickly integrate into teams and projects.</strong>
        </h3>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          className={styles.cardsContainer}
        >
          {skills
            .sort((a, b) => (a.skill < b.skill ? 1 : -1))
            .map((skill) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                className={styles.skillsContainer}
                key={`skill-${skill.name}`}
              >
                <div className={styles.skill}>
                  <span>{skill.name}</span>
                  <div className={styles.skillFullLine}></div>
                  <div
                    className={styles.skillLine}
                    style={{ width: `${skill.skill}%` }}
                  ></div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
      <div className={styles.experience}>
        <h2>Experiences</h2>
        {experiences.map((experience) => (
          <Experience experience={experience} key={experience.company} />
        ))}
      </div>
      <div className={styles.projects}>
        <h2>Projects</h2>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
