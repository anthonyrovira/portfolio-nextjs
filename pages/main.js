import React, { useState, useEffect } from "react";
import {
  AlignCenter,
  MessageCircle,
  Twitter,
  Linkedin,
  GitHub,
  Mail,
} from "react-feather";
import styles from "@styles/Main.module.css";
import data from "@content/json/ar-main.json";

import Hero from "@components/hero";
import Projects from "@components/projects";
//import data from "@content/json/ar-projects.json";

const Main = ({ language }) => {
  return (
    <>
      <Hero content={data[language].hero} />
      <Projects content={data[language].projects} language={language} />
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

export async function getStaticProps({ params }) {}
