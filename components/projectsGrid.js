import React, { useContext } from "react";
import { LanguageContext } from "@contexts/langContext";
import ProjectCard from "@components/ProjectCard";
import styles from "@styles/ProjectsGrid.module.css";

const ProjectsGrid = ({ setToggleGridView, setTargetedProject }) => {
  const language = useContext(LanguageContext);
  const { projects } = language;
  return (
    <div className={styles.gridContainer}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          setToggleGridView={setToggleGridView}
          setTargetedProject={setTargetedProject}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
