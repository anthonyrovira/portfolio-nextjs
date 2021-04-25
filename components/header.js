import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from "react-feather";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import data from "@content/json/ar-header.json";

//import logo from "../public/images/lereacteur.jpeg";

const Header = ({ sideMenu, setSideMenu, language }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.pictureContainer}>
            <Image
              className={styles.pictureProfile}
              src="/images/pp.jpg"
              layout="fill"
              quality={100}
              alt="Anthony Rovira Profile Picture"
            />
          </div>
        </Link>
        {/*<div className={styles.title}>
            <p className={styles.name}>Anthony Rovira</p>
            <p className={`${styles.job} ${styles[language]}`}>
              {data[language].title}
            </p>
          </div>*/}

        <nav className={styles.navbarContainer}>
          <ul className={styles.navbar}>
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
        <Menu
          className={`${styles.icon} ${styles.burger}`}
          onClick={() => setSideMenu(true)}
          size={40}
        />
      </div>
    </header>
  );
};
/*
<h1 className={styles.link}>
    <Link href="/">{siteTitle}</Link>
</h1>
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
*/
export default Header;
