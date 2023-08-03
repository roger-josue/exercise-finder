import Image from "next/image";
import searchPic1 from "../../public/images/search-1.jpg";
import searchPic2 from "../../public/images/search-2.jpg";
import searchPic3 from "../../public/images/search-3.jpg";
import Swiper from "./Swiper";
import { SlideImages } from "@/types/types";

export default function SearchSwipper() {

    const images: SlideImages = [
        {
            id: "slide1",
            author: "Drazen Zigic",
            asset: searchPic1,
            url: "https://www.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_25743546.htm#query=workout&position=0&from_view=search&track=sph"
        },
        {
            id: "slide2",
            author: "master1305",
            asset: searchPic2,
            url: "https://www.freepik.com/free-photo/beautiful-young-sporty-woman-training-workout-gym_16349253.htm#query=workout&position=13&from_view=search&track=sph"
        },
        {
            id: "slide3",
            author: "Freepik",
            asset: searchPic3,
            url: "https://www.freepik.com/free-photo/medium-shot-smiley-woman-stretching_11520753.htm#query=workout&position=20&from_view=search&track=sph"
        }
    ];

    return (
        <section className="relative w-screen sm:w-full flex flex-col items-start gap-16 mb-10 sm:rounded-md sm:p-4">
            <div className="absolute inset-0 z-40 bg-bg-secondary bg-opacity-50 sm:rounded-md pointer-events-none flex flex-col gap-8 lg:gap-10 p-4 pt-8 min-[430px]:p-8 justify-center">
                <h2 className="max-[400px]:text-3xl text-4xl sm:5xl md:text-6xl lg:text-7xl md:w-3/4 tracking-wide font-semibold">Filter your favorite exercises by name </h2>
                <input className="pointer-events-auto w-full sm:w-3/4 lg:w-2/4 text-text tracking-wide text-lg lg:text-xl h-16 rounded-md border-none pl-2 bg-bg-secondary bg-opacity-75 focus:bg-opacity-95 outline-secondary transition-all duration-200" type="text" name="search" id="search" placeholder="Search exercises" />
            </div>
            <Swiper>
                {
                    images.map(image => (
                        <figure key={image.id} className="snap-center snap-always relative flex min-w-fit sm:rounded-md">
                            <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                            <Image src={image.asset} alt={`Image by ${image.author} on Freepik`} className="pointer-events-none sm:rounded-md object-cover max-[400px]:h-full" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
                            <figcaption className="absolute inset-0 z-30 group">
                                <a className="text-sm opacity-20 absolute right-2 bottom-4 hover:underline" target="blank" href={image.url}>By {image.author} on Freepik</a>
                            </figcaption>
                        </figure>
                    ))
                }
            </Swiper>
        </section>
    )
}