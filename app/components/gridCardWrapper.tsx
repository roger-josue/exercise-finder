
export default function GridCardWrapper({ children }: { children: JSX.Element[] }) {
    return (
        <section id="search-result" className="flex flex-col gap-8 w-full">
            <h1 className="text-2xl lg:text-3xl mt-24" >Showing results</h1>
            <hr className="border-bg-secondary" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full h-full">
                {children}
            </div>
        </section>
    );
}