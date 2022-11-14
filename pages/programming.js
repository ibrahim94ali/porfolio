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
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <Head>
        <title>Ibrahim Aliu Programming</title>
      </Head>
      <div className={styles.texts}>
        <h2>Programming</h2>
        <h3 className={styles.subtitle}>
          I have {currentYear - 2017} years of experience in web and mobile development
        </h3>
        <ul>
          <li>
            <b>Design:</b> Designing user friendly, good looking, responsive
            interfaces
          </li>
          <li>
            <b>Front-end:</b> Implementing the designs for web and mobile
            platforms
          </li>
          <li>
            <b>Back-end:</b> Creating API’s, back-end logic, designing Database
            models
          </li>
        </ul>
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
            .sort((a, b) => (a.name > b.name ? 1 : -1))
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
