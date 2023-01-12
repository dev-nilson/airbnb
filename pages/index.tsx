import type { NextPage } from "next";
import { Place } from "../typescript/interfaces";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

type HomeProps = {
  exploreData: Place[];
};

const Home: NextPage<HomeProps> = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

export default Home;
