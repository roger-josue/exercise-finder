import SearchSwipper from "../components/searchSwipper"

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <main id="top" className="flex flex-col gap-12 min-h-screen w-screen items-center p-4 xl:px-20 xl:py-10">
                <SearchSwipper />
                {children}

            </main>
        </section>
    )
}