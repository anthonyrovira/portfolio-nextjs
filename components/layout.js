import React, { useState } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "@styles/Layout.module.css";
import { LanguageContext, languages } from "@contexts/langContext";

export default function Layout({ children, sideMenu, setSideMenu }) {
  return (
    <div className={styles.root}>
      <LanguageContext.Provider value={languages.english}>
        <Head>
          <title>Portfolio | Anthony Rovira</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header sideMenu={sideMenu} setSideMenu={setSideMenu} />

        <main className={styles.mainContainer}>{children}</main>

        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}
