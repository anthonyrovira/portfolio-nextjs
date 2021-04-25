import React, { useState, useEffect } from "react";
import { Home, X, Linkedin, GitHub, Twitter } from "react-feather";
import data from "@content/json/ar-header.json";

import styles from "@styles/SideMenu.module.css";

const SideMenu = ({ sideMenu, setSideMenu }) => {
  const [language, setLanguage] = useState("english");
  return (
    <div className={styles.menuContainer}>
      <div className={styles.topMenuContainer}>
        <a href="/" className={styles.topMenuItems}>
          <Home className={styles.iconHome} size={34} />
        </a>
        <div className={styles.topMenuItems} onClick={() => setSideMenu(false)}>
          <X className={styles.iconClose} size={34} />
        </div>
      </div>

      <nav className={styles.navMenuContainer}>
        <ul className={styles.navMenu}>
          {data[language].header.map((category, index) => {
            const item = Object.keys(category);
            return (
              <div key={index} className={styles.navItem}>
                <a /* href="#id"*/>{category[item]}</a>
              </div>
            );
          })}
        </ul>
      </nav>
      <div className={styles.snContainer}>
        <a
          href="https://www.linkedin.com/in/anthonyrovira/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Linkedin className={styles.snIcon} />
        </a>
        <a
          href="https://github.com/anthonyrovira"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <GitHub className={styles.snIcon} />
        </a>
        <a
          href="https://mobile.twitter.com/AnthonyRoviraJS"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <Twitter className={styles.snIcon} />
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
