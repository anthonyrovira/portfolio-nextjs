import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "@styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>Home | Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header siteTitle={`Next.js | Sample Website`} />

      <main className={styles.mainContainer}>{children}</main>

      <Footer />
    </div>
  );
}
