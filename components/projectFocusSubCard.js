import React, { useState, useContext } from "react";
import { LanguageContext } from "@contexts/langContext";
import Image from "next/image";
import { ExternalLink } from "react-feather";
//import useCarousel from "@hooks/useCarousel";
import styles from "@styles/ProjectFocusSubCard.module.css";

const ProjectFocusSubCard = ({ projectData, slug }) => {
  const language = useContext(LanguageContext);
  //const { back } = language;
  const projectDescription = language.main.projects[slug].description;
  const projectDate = language.main.projects[slug].date;

  return (
    <div className={styles.subCardContainer}>
      <div className={styles.leftSubCard}>
        <div className={styles.date}>
          <span>
            <strong>{projectDate}</strong>
          </span>
        </div>
        <div className={styles.description}>
          <span>{projectDescription}</span>
        </div>
      </div>
      <div className={styles.rightSubCard}>
        <table>
          <tbody>
            <tr>
              <th scope="row">
                <strong>Deploy</strong>
              </th>
              <td>
                <a href={projectData.url}>
                  <ExternalLink className={styles.links} />
                </a>
              </td>
              <td>
                {projectData.netlify && (
                  <a href={projectData.url}>
                    <Image
                      src={projectData.netlify}
                      layout={"intrinsic"}
                      width={100}
                      height={40}
                      objectFit={"contain"}
                      quality={100}
                      alt={"Netlify deployment status badge"}
                    />
                  </a>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">
                <strong>Github</strong>
              </th>

              <td>
                {projectData.github.backend && (
                  <a href={projectData.github.backend}>
                    <span>Backend</span>
                  </a>
                )}
              </td>
              <td>
                <a href={projectData.github.frontend}>
                  <span>Frontend</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectFocusSubCard;
