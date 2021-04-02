import React from "react";
import styles from "../styles/Project.module.scss";

function Project({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{project.name}</h3>
        <a>{project.link}</a>
      </div>
      <p>{project.info}</p>
      <h3>Technologies</h3>
      <ul className={styles.techUl}>
        {project.technologies.map((pr) => (
          <li className={styles.techLi} key={pr}>
            {pr}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
