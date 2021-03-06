import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>REVESTICOR - Revendedor Cin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="loja CIN, revededor cin, Pintura, Construção, CIN, tintas, algarve, portugal, pintura, pintores"
        ></meta>
      </Head>

      <Navbar />
      <HeaderSection />
    </div>
  );
}
