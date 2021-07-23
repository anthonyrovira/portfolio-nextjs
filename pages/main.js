import React, { useState, useEffect } from "react";
import styles from "@styles/Main.module.css";

import Hero from "@components/hero";
import Projects from "@components/projects";
//import data from "@content/json/ar-projects.json";

const Main = () => {
  return (
    <>
      <Hero />
      <Projects />
      {/*
      <h2 className={styles.title}>My Web Projects:</h2>
      {projects.map((project, index) => (
        <Link
          key={index}
          href={`/projects/${project.route}`}
        >{`${project.title}`}</Link>
      ))}*/}
    </>
  );
};

export default Main;

//export async function getStaticProps({ params }) {}
