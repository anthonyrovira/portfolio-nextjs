import styles from "@styles/Home.module.css";
import Main from "@components/main";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout>
      <Main className={styles.container} />
    </Layout>
  );
}
