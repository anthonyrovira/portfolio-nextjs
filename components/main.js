import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Main.module.css";

const Main = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectsData = () => {
      const data = require("@content/json/ar-projects.json");

      setProjects(data);
    };
    getProjectsData();
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src="/images/pp-cv.png"
        width={90}
        height={95}
        quality={95}
        alt="Anthony Rovira Profile Picture"
      />
      <br />
      <h1 className={styles.title}>Anthony Rovira</h1>
      <br />

      <p>
        Hello, I’m Anthony. I’m a web developer looking for an internship. You
        can contact me on{" "}
        <a rel="noreferrer" href="https://twitter.com/hysteria_9">
          Twitter
        </a>
        .
      </p>
      <p>
        (This is a sample website created during the{" "}
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="https://www.lereacteur.io/formation/react-redux/"
        >
          Rocket Training
        </a>
        . Courses was given by{" "}
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="https://github.com/FaridSafi"
        >
          Farid Safi
        </a>
        ).
      </p>
      <br />
      <h2 className={styles.title}>My Web Projects:</h2>
      {projects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.route}`}
        >{`${project.title}`}</Link>
      ))}
    </div>
  );
};

export default Main;
