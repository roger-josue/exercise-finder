import Image from "next/image";
import searchPic1 from "../../public/images/search-1.jpg";
import searchPic2 from "../../public/images/search-2.jpg";
import searchPic3 from "../../public/images/search-3.jpg";

export default function SearchSwipper() {
    // TODO: useRef to control the swipper's x-position

    return (
        <section className="relative w-screen sm:w-full flex flex-col items-start gap-16 mb-10 sm:rounded-md sm:p-4">
            <div className="absolute inset-0 z-40 bg-bg-secondary bg-opacity-40 sm:rounded-md pointer-events-none flex flex-col gap-6 p-4 pt-8 min-[430px]:p-8 min-[430px]:justify-center">
                <h2 className="max-[370px]:text-2xl text-3xl sm:text-4xl lg:text-7xl sm:w-3/4">Search your favorite exercises by name </h2>
                <input className="pointer-events-auto w-full sm:w-3/4 lg:w-2/4 text-text tracking-wide text-lg lg:text-xl h-14 rounded-md border-none pl-2 bg-bg-secondary bg-opacity-90 outline-secondary" type="text" name="search" id="search" placeholder="Search exercises" />
            </div>
            {/*  TODO: Break this down into a Swipper HOC to display swippers all over the site */}
            <div className="snap-x snap-mandatory flex flex-nowrap gap-4 overflow-x-scroll sm:rounded-md">
                <figure className="snap-center snap-always relative flex min-w-fit sm:rounded-md">
                    <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                    <Image src={searchPic1} alt="Image by Drazen Zigic on Freepik" className="pointer-events-none sm:rounded-md object-cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
                    <figcaption className="absolute inset-0 z-30 group">
                        <a className="text-sm opacity-20 absolute right-2 bottom-4 hover:underline" target="blank" href="https://www.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_25743546.htm#query=workout&position=0&from_view=search&track=sph">By Drazen Zigic on Freepik</a>
                    </figcaption>
                </figure>
                <figure className="snap-center snap-always relative flex min-w-fit sm:rounded-md">
                    <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                    <Image src={searchPic2} alt="Image by master1305 on Freepik" className="pointer-events-none sm:rounded-md object-cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
                    <figcaption className="absolute inset-0 z-30 group">
                        <a className="text-sm opacity-20 absolute right-2 bottom-4 hover:underline" target="blank" href="https://www.freepik.com/free-photo/beautiful-young-sporty-woman-training-workout-gym_16349253.htm#query=workout&position=13&from_view=search&track=sph">By master1305 on Freepik</a>
                    </figcaption>
                </figure>
                <figure className="snap-center snap-always relative flex min-w-fit sm:rounded-md">
                    <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                    <Image src={searchPic3} alt="Image by Freepik on Freepik" className="pointer-events-none sm:rounded-md object-cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
                    <figcaption className="absolute inset-0 z-30 group">
                        <a className="text-sm opacity-20 absolute right-2 bottom-4 hover:underline" target="blank" href="https://www.freepik.com/free-photo/medium-shot-smiley-woman-stretching_11520753.htm#query=workout&position=20&from_view=search&track=sph">By Freepik on Freepik</a>
                    </figcaption>
                </figure>
            </div>
            {/* Finishes here */}
        </section>
    )
}