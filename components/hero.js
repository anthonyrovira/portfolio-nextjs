import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlignCenter,
  MessageCircle,
  Twitter,
  Linkedin,
  GitHub,
} from "react-feather";
import styles from "@styles/Hero.module.css";

import AnimatedSubtitle from "@components/animatedSubtitle";

const Hero = ({ content }) => {
  const { title, subtitles, ctaRead, ctaContact } = content;
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroPictureContainer}>
        <Image
          className={styles.background}
          src="/images/matt-duncan-unsplash-ar.png"
          layout="fill"
          objectFit="cover"
          alt="Photo by Matt Duncan on Unsplash"
        />
      </div>
      <div className={styles.heroContentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line}></div>
        <br />
        <AnimatedSubtitle subtitles={subtitles} />
        <br />
        <div className={styles.snContainer}>
          <a
            href="https://www.linkedin.com/in/anthonyrovira/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <Linkedin className={styles.snIcon} />
          </a>
          <a
            href="https://github.com/anthonyrovira"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <GitHub className={styles.snIcon} />
          </a>
          <a
            href="https://mobile.twitter.com/AnthonyRoviraJS"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <Twitter className={styles.snIcon} />
          </a>
        </div>
        <div className={styles.ctaContainer}>
          <button className={`${styles.cta} ${styles.ctaPrimary}`}>
            <span>{ctaRead.toUpperCase()}</span>
            <AlignCenter className={styles.icon} />
          </button>
          <button className={`${styles.cta} ${styles.ctaSecondary}`}>
            <span>{ctaContact.toUpperCase()}</span>
            <MessageCircle className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
