import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <section>
          <p className="text-xs">300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in New York</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
