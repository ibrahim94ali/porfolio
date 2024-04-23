import React from "react";
import styles from "../styles/Experience.module.scss";

function Experience({ experience }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{experience.role}</span>
        <div className={styles.titleContainer}>
          <h3>{experience.company}</h3>
          {experience.links.map((link) => (
            <a href={link} target="_blank" rel="noopener" key={link}>
              {link}
            </a>
          ))}
        </div>
        <span>{experience.dates}</span>
      </div>
      <p>{experience.info}</p>
      <ul>
        {experience.responsibilities.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
      <h3 className={styles.techs}>Technologies</h3>
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
