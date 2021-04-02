import { Grid } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Experience from "../components/Experience";
import Project from "../components/Project";
import styles from "../styles/Programming.module.scss";

const skills = [
  {
    name: "Javascript / Typescript",
    skill: 80,
  },
  {
    name: "Angular",
    skill: 85,
  },
  {
    name: "React",
    skill: 70,
  },
  {
    name: "NextJS",
    skill: 60,
  },
  {
    name: "React Native",
    skill: 75,
  },
  {
    name: "Ionic",
    skill: 80,
  },
];

const projects = [
  {
    name: "Bee Safe",
    link: "https://github.com/ibrahim94ali/BeeSafe",
    info:
      "Bee Safe is my graduation project. It is a cross platform mobile application for storing credentials of users accounts securely and generating highly secured passwords. It works locally and synchronize data when connection is available.",
    technologies: [
      "CSS3",
      "HTML5",
      "Angular",
      "InVision",
      "Javascipt",
      "Typescript",
      ".NET",
    ],
  },
];

const experiences = [
  {
    company: "Symanto",
    link: "https://www.symanto.com",
    role: "Front-end Developer",
    dates: "01.2020 - 02.2021",
    info:
      "Symanto is a leading German company in the field of Psychology & AI, combining latest technologies with psycholinguistic models to analyze and present big amount of text data.",
    responsibilities: [
      "Worked with an engineering team of 15 members",
      "Created brand new insights platform where customers can analyze their data presented in charts, tables",
      "Improved management platform for company users where they can manage customers, companies, projects, language based dictionaries, clusterings, crawlers, etc...",
      "Reviewed front-end code",
      "Contributed in API when basic data changes needed",
    ],
    technologies: [
      "CSS3",
      "HTML5",
      "Angular",
      "InVision",
      "Javascipt",
      "Typescript",
      ".NET",
    ],
  },
  {
    company: "Symanto2",
    link: "https://www.symanto.com",
    role: "Front-end Developer",
    dates: "01.2020 - 02.2021",
    info:
      "Symanto is a leading German company in the field of Psychology & AI, combining latest technologies with psycholinguistic models to analyze and present big amount of text data.",
    responsibilities: [
      "Worked with an engineering team of 15 members",
      "Created brand new insights platform where customers can analyze their data presented in charts, tables",
      "Improved management platform for company users where they can manage customers, companies, projects, language based dictionaries, clusterings, crawlers, etc...",
      "Reviewed front-end code",
      "Contributed in API when basic data changes needed",
    ],
    technologies: [
      "CSS3",
      "HTML5",
      "Angular",
      "InVision",
      "Javascipt",
      "Typescript",
      ".NET",
    ],
  },
];

export default function Programming() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ibrahim Aliu Programming</title>
      </Head>
      <div className={styles.texts}>
        <h2>Programming</h2>
        <h3>I have 4 years of experience in web and mobile development</h3>
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
          {skills.map((skill) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={styles.skillsContainer}
              key={skill.name}
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
        <h2>Experience</h2>
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
