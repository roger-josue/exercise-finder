import CategoryMasonry from "./components/categoryMasonry";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center p-2 xl:p-20">
      <Landing />
      <CategoryMasonry />
    </main>
  )
}
