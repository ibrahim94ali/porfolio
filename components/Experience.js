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
        {experience.responsibilities.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
      <h3>Technologies</h3>
      <ul className={styles.techUl}>
        {experience.technologies
          .sort((a, b) => (a > b ? 1 : -1))
          .map((tech) => (
            <li className={styles.techLi} key={`${experience.company}-${tech}`}>
              {tech}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Experience;
