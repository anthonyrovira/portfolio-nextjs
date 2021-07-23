import React, { useState } from "react";
import styles from "@styles/Home.module.css";
import Main from "@pages/main";
import Layout from "@components/layout";
import SideMenu from "@components/SideMenu";

export default function Home() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <Layout sideMenu={sideMenu} setSideMenu={setSideMenu}>
      {sideMenu && (
        <div className={styles.sideMenu}>
          <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
        </div>
      )}
      <Main />
    </Layout>
  );
}
