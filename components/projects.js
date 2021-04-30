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
              <div key={project.id} className={styles.cardProjectContainer}>
                <div className={styles.thumbnailContainer}>
                  <Image
                    className={styles.projectThumbnail}
                    src={project.thumbnail}
                    layout={"fill"}
                    objectFit={"cover"}
                    /*width={318}
                    height={187}*/
                    quality={100}
                    alt={project.title}
                  />
                </div>

                <p className={styles.projectCategory}>{project.category}</p>
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
