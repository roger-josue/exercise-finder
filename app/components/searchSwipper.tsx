import Image from "next/image";
import searchPic1 from "../../public/images/search-1.jpg";
import searchPic2 from "../../public/images/search-2.jpg";
import searchPic3 from "../../public/images/search-3.jpg";
import searchPic4 from "../../public/images/search-4.jpg";
import searchPic5 from "../../public/images/search-5.jpg";
import Swiper from "./Swiper";
import { SlideImages } from "@/types/types";
import SearchInput from "./searchInput";

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
        },
        {
            id: "slide4",
            author: "master1305",
            asset: searchPic4,
            url: "https://www.freepik.com/free-photo/young-muscular-caucasian-athlete-training-gym-doing-strength-exercises-practicing-work-his-upper-body-pulling-weights-barbells-fitness-wellness-healthy-lifestyle-concept-working_12999339.htm#page=2&query=workout&position=43&from_view=search&track=sph"
        },
        {
            id: "slide5",
            author: "prostooleh",
            asset: searchPic5,
            url: "https://www.freepik.com/free-photo/sports-blonde-woman-sportswear-training-gym_7169053.htm#page=2&query=workout&position=1&from_view=search&track=sph"
        },
    ];

    return (
        <section className="relative w-screen sm:w-full flex flex-col items-start gap-16 mb-10 sm:rounded-md sm:p-4 xl:p-10">
            <div className="absolute inset-0 z-40 bg-bg-secondary bg-opacity-50 sm:rounded-md pointer-events-none flex flex-col gap-8 lg:gap-10 p-4 pt-8 min-[430px]:p-8 xl:p-12 justify-center">
                <h2 className="max-[400px]:text-3xl text-4xl sm:5xl md:text-6xl lg:text-7xl md:w-3/4 tracking-wide font-semibold">Filter your favorite exercises by name </h2>
                <SearchInput />
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