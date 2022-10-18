import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Sidebar from "components/sidebar/Sidebar";
import AppBar from "../components/app-bar/AppBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MFT</title>
        <meta
          name="My financial tracker"
          content="A webapp to give insights into your finances"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <AppBar />
      <main className={styles.main}>
        Yet to be designed
      </main>
    </div>
  );
};

export default Home;
