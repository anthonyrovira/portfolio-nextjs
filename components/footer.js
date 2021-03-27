import React from "react";
import styles from "@styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          className={styles.link}
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
      </p>
    </footer>
  );
};

export default Footer;
