import { useRouter } from "next/router";
import { format } from "date-fns";
import { Result } from "../typescript/interfaces";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

type SearchProps = {
  searchResults: Result[];
};

function Search({ searchResults }: SearchProps) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location}`} />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {range} for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="chip">Cancellation Flexibility</p>
            <p className="chip">Type of Place</p>
            <p className="chip">Price</p>
            <p className="chip">Rooms and Beds</p>
            <p className="chip">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: Result) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
             />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
