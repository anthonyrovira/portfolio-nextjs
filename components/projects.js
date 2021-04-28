import React, { useState } from "react";
import Image from "next/image";
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
              <button key={project.id} className={styles.cardProjectContainer}>
                <Image
                  className={styles.projectThumbnail}
                  src={project.thumbnail}
                  layout="intrinsic"
                  width={200}
                  height={146}
                  quality={100}
                  alt={project.title}
                />
                <p className={styles.projectCategory}>{project.category}</p>
              </button>
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
