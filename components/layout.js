import React, { useState } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "@styles/Layout.module.css";

export default function Layout({ children, sideMenu, setSideMenu, language }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>Home | Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
        language={language}
      />

      <main className={styles.mainContainer}>{children}</main>

      <Footer language={language} />
    </div>
  );
}
