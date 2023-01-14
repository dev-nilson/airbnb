import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in New York
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="chip">Cancellation Flexibility</p>
            <p className="chip">Type of Place</p>
            <p className="chip">Price</p>
            <p className="chip">Rooms and Beds</p>
            <p className="chip">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
