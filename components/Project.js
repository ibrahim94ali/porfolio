import React from "react";
import styles from "../styles/Project.module.scss";

function Project({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{project.name}</h3>
        <div className={styles.linksContainer}>
          {project.links.map((link) => (
            <a href={link.link} target="_blank" rel="noopener" key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p>{project.info}</p>
      <ul>
        {project.responsibilities.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
      <h3 className={styles.techs}>Technologies</h3>
      <ul className={styles.techUl}>
        {project.technologies
          .sort((a, b) => (a > b ? 1 : -1))
          .map((pr) => (
            <li className={styles.techLi} key={pr}>
              {pr}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Project;
