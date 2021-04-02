import React from "react";
import styles from "../styles/Experience.module.scss";

function Experience({ experience }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{experience.role}</span>
        <div className={styles.titleContainer}>
          <h3>{experience.company}</h3>
          <a>{experience.link}</a>
        </div>
        <span>{experience.dates}</span>
      </div>
      <p>{experience.info}</p>
      <ul>
        {experience.responsibilities.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
      <h3>Technologies</h3>
      <ul className={styles.techUl}>
        {experience.technologies.map((tech) => (
          <li className={styles.techLi} key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
