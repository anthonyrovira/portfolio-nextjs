import React, { useState, useContext } from "react";
import { Menu } from "react-feather";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import data from "@content/json/ar-header.json";
import { LanguageContext } from "@contexts/langContext";

//import logo from "../public/images/lereacteur.jpeg";

const Header = ({ sideMenu, setSideMenu }) => {
  const language = useContext(LanguageContext);

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
        <nav className={styles.navbarContainer}>
          <ul className={styles.navbar}>
            {language.header.items.map((category, index) => {
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

export default Header;
