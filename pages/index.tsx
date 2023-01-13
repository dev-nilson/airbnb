import type { NextPage } from "next";
import { City, Place } from "../typescript/interfaces";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

type HomeProps = {
  primaryData: City[];
  secondaryData: Place[];
};

const Home: NextPage<HomeProps> = ({ primaryData, secondaryData }) => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {primaryData.map((item) => (
              <SmallCard
                key={item.img}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
            {secondaryData.map((item) => (
              <MediumCard key={item.img} image={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const primaryData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const secondaryData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      primaryData,
      secondaryData,
    },
  };
}

export default Home;
