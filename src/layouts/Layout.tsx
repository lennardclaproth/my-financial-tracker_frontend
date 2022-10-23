import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideBar from "components/sidebar/Sidebar";
import AppBarComponent from "components/app-bar/AppBar";

const Layout: NextPage = ({children}) => {
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
      {/* <SideBar /> */}
      <AppBarComponent />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
