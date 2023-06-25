import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ambélé, On Est Ensemble</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* // ! FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,700&display=swap" rel="stylesheet" />

      </Head>

      {/* // TODO: NAVBAR */}
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}
