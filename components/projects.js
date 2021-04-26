import React, { useState } from "react";
import projects from "@content/json/ar-projects.json";
import styles from "@styles/Projects.module.css";

const Projects = ({ content, language }) => {
  const [gridView, setGridView] = useState(true);

  const { title } = content;
  return (
    <section className={styles.projectsContainer}>
      <h1 className={styles.title}>{title}</h1>
      {gridView ? (
        <div className={styles.gridContainer}>
          {projects.map((project) => {
            return (
              <div key={project.id} className={styles.cardProjectContainer}>
                {project.route}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <h2>Le titre</h2>
          </div>
          <div className={styles.carouselContainer}></div>
        </div>
      )}
    </section>
  );
};

export default Projects;
