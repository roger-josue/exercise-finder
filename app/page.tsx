import Footer from "./components/footer";
import Landing from "./components/landing";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center p-8 xl:p-20">
        <Landing />
      </main>
      <Footer />
    </>
  )
}
