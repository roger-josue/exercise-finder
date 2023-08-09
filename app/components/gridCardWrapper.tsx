
export default function GridCardWrapper({ children, keyword = "All exercises" }: { children: JSX.Element[] | JSX.Element, keyword: string | undefined }) {
    return (
        <section id="search-result" className="flex flex-col gap-8 w-full">
            <h1 className="text-2xl lg:text-3xl mt-24" >Showing results for: <span className="text-text text-xl">"{keyword}"</span></h1>
            <hr className="border-bg-secondary" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full h-full">
                {children}
            </div>
        </section>
    );
}