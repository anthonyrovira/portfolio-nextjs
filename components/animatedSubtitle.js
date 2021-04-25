import React, { useEffect } from "react";
import { init } from "ityped";
import styles from "@styles/AnimatedSubtitle.module.css";

const animatedSubtitle = ({ subtitles }) => {
  useEffect(() => {
    const subtitle = document.querySelector("#subtitle");
    init(subtitle, {
      showCursor: false,
      startDelay: 800,
      backDelay: 800,
      backSpeed: 50,
      typeSpeed: 120,
      strings: subtitles,
    });
  }, []);
  return (
    <div className={styles.subtitleContainer}>
      <div id="subtitle" className={styles.subtitle}></div>
      <div className={styles.cursor}>|</div>
    </div>
  );
};

export default animatedSubtitle;
