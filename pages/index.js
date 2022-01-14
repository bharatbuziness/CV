import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HeroBanner from "../components/Herobanner";
import AboutS from "../components/AboutS";
import Services from "../components/Services";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HeroBanner />
      <AboutS />
      <Services />
      <Stats />
    </div>
  );
}
