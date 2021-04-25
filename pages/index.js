import React, { useState, useEffect } from "react";
import styles from "@styles/Home.module.css";
import Main from "@pages/main";
import Layout from "@components/layout";
import SideMenu from "@components/SideMenu";

export default function Home() {
  // Languages: "english", "french" or "spanish"
  const [language, setLanguage] = useState("english");
  const [sideMenu, setSideMenu] = useState(false);
  console.log(sideMenu);
  return (
    <Layout sideMenu={sideMenu} setSideMenu={setSideMenu} language={language}>
      {sideMenu && (
        <div className={styles.sideMenu}>
          <SideMenu
            sideMenu={sideMenu}
            setSideMenu={setSideMenu}
            language={language}
          />
        </div>
      )}
      <Main language={language} />
    </Layout>
  );
}
