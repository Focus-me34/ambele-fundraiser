import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ButtonCTA from "@/components/UI/ButtonCTA";

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ambélé, On Est Ensemble</title>
        <meta name="description" content="Ambélé (on est ensemble) est une association montpelliéraine de solidarité international qui a pour projet de facilité l'access à l'education pour les jeunes du lycée de jeune fille de Kobaya"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <ButtonCTA size="floating"/>
      <Footer />
    </>
  );
}
