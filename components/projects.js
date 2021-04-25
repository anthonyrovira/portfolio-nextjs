import React from "react";
import data from "@content/json/ar-projects.json";
import styles from "@styles/Projects.module.css";

const Projects = ({ content }) => {
  const { title } = content;
  return (
    <div className={styles.projectsContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default Projects;
