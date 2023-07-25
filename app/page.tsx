import CategoryGrid from "./components/categoryGrid";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center p-4 xl:p-20">
      <Landing />
      <CategoryGrid />
    </main>
  )
}
