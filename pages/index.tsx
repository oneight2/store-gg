/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next';
import Image from 'next/image';
import FeaturedGame from '../components/organism/FeaturedGame';
import Footer from '../components/organism/Footer';
import MainBanner from '../components/organism/MainBanner/MainBanner';
import Navbar from '../components/organism/Navbar';
import Reached from '../components/organism/Reached';
import Story from '../components/organism/Story';
import TransactionStep from '../components/organism/TransactionStep';
import Head from 'next/dist/shared/lib/head';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>StoreGG - Get a New
          Experience in Gaming</title>
        <meta name="description" content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati" />
        <meta property='og:title' content="StoreGG" />
        <meta property='og:description' content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
