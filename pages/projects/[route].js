import React from "react";
import Link from "next/link";
import Layout from "@components/layout";
import styles from "@styles/Projects.module.css";
import { getAllProjectsRoutes, getProjectDataFromRoute } from "@lib/projects";

export default function Projects({ data }) {
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <p className={styles.date}>{data.date}</p>
        <p>
          <strong>Description:</strong>
        </p>
        <p className={styles.paragraph}>{data.description}</p>
        <br />

        <p>
          <strong>URL:</strong>
        </p>
        <p className={styles.paragraph}>
          <a
            className={styles.link}
            href={data.url}
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            {data.url}
          </a>
        </p>
        <br />
      </div>
      <p className={styles.homePageRedirect}>
        <Link href="/">Go back to the homepage</Link>
      </p>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllProjectsRoutes();
  //console.log(paths);
  return {
    paths,
    fallback: true, //allows (or not) other page paths to exist
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  //console.log(params);
  const data = getProjectDataFromRoute(params.route);
  return {
    props: {
      data,
    },
  };
}
