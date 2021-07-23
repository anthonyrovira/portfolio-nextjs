import React, { useState, useContext } from "react";
import { LanguageContext } from "@contexts/langContext";
import Image from "next/image";
import {
  ChevronLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  ExternalLink,
} from "react-feather";
import ProjectFocusSubCard from "@components/projectFocusSubCard";
//import useCarousel from "@hooks/useCarousel";
import styles from "@styles/ProjectFocus.module.css";

const ProjectFocus = ({ projectData, slug }) => {
  const [indexPicture, setIndexPicture] = useState(0);

  const language = useContext(LanguageContext);
  const { back } = language;
  const projectDescription = language.main.projects[slug].description;
  const projectDate = language.main.projects[slug].date;

  return (
    <div className={styles.focusContainer}>
      <div className={styles.titleContainer}>
        <button className={styles.backContainer}>
          <ChevronLeft className={styles.backIcon} />
          <span className={styles.backText}>{back}</span>
        </button>
        <h2 className={styles.title}>{projectData.title}</h2>
        <p className={styles.category}>{projectData.category}</p>
      </div>
      <div className={styles.carouselContainer}>
        {indexPicture > 0 ? (
          <button className={styles.leftCarouselContainer}>
            <ArrowLeftCircle
              className={styles.arrows}
              onClick={() => setIndexPicture(indexPicture - 1)}
            />
          </button>
        ) : (
          <div className={styles.leftCarouselContainer}></div>
        )}

        <div className={styles.carousel}>
          <div className={styles.pictureContainer}>
            <Image
              src={projectData.pictures[indexPicture]}
              className={styles.picture}
              layout={"fill"}
              objectFit={"contain"}
              quality={100}
              alt={projectData.title + ` n°${indexPicture}`}
            />
          </div>
        </div>

        {indexPicture < projectData.pictures.length - 1 ? (
          <button
            className={styles.rightCarouselContainer}
            onClick={() => setIndexPicture(indexPicture + 1)}
          >
            <ArrowRightCircle className={styles.arrows} />
          </button>
        ) : (
          <div className={styles.rightCarouselContainer}></div>
        )}
      </div>
      <ProjectFocusSubCard projectData={projectData} slug={slug} />
    </div>
  );
};

export default ProjectFocus;
