import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="container mx-auto px-4 py-8">
        <SearchBox />
      </main>
    </>
  );
}
