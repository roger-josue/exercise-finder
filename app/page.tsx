import CategoryGrid from "./components/categoryGrid";
import Landing from "./components/landing";
import SearchSwipper from "./components/searchSwipper";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-6 items-center p-4 xl:p-20">
      <Landing />
      <SearchSwipper />
      <CategoryGrid />
    </main>
  )
}
