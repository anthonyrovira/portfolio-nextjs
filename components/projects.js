import React, { useState, useContext } from "react";
import ProjectsGrid from "@components/ProjectsGrid";
import ProjectFocus from "@components/ProjectFocus";
import { LanguageContext } from "@contexts/langContext";
import styles from "@styles/Projects.module.css";

const Projects = () => {
  const [toggleGridView, setToggleGridView] = useState(true);
  const [targetedProject, setTargetedProject] = useState();

  const language = useContext(LanguageContext);

  const { title } = language.main.projects;

  return (
    <section className={styles.projectsContainer}>
      <h1 className={styles.title}>{title}</h1>
      {toggleGridView ? (
        <ProjectsGrid
          setToggleGridView={setToggleGridView}
          setTargetedProject={setTargetedProject}
        />
      ) : (
        <ProjectFocus
          projectData={language.projects[targetedProject]}
          slug={language.projects[targetedProject].slug}
        />
      )}
    </section>
  );
};

export default Projects;
