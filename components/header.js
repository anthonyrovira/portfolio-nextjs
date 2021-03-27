import * as React from "react";
import PropTypes from "prop-types";
import styles from "@styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

//import logo from "../public/images/lereacteur.jpeg";

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image
            src="/images/lereacteur.jpeg"
            width={120}
            height={120}
            quality={95}
            alt="Le Reacteur logo"
          />
        </a>
      </Link>

      <h1 className={styles.link}>
        <Link href="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
