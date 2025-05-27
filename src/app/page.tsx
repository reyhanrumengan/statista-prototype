import Header from "@/components/header/Header";
import SearchBar from "@/components/search-bar/SearchBar";
import StatisticList from "@/components/statistic-list/StatisticList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <StatisticList />
      </main>
    </>
  );
}
