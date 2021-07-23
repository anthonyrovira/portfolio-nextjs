import React from "react";
import Image from "next/image";
import styles from "@styles/ProjectCard.module.css";

const ProjectCard = ({ project, setToggleGridView, setTargetedProject }) => {
  const handleClickProject = (id) => {
    setTargetedProject(id);
    setToggleGridView(false);
  };

  return (
    <button
      className={styles.cardProjectContainer}
      onClick={() => handleClickProject(project.id)}
    >
      <div className={styles.thumbnailContainer}>
        <Image
          src={project.thumbnail}
          layout={"fill"}
          objectFit={"cover"}
          quality={100}
          alt={project.title}
        />
      </div>

      <span className={styles.projectCategory}>{project.category}</span>
    </button>
  );
};

export default ProjectCard;
