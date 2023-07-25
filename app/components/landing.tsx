import Image from "next/image";
import barbellPic from '../../public/images/bodybuilder.jpg';
import Link from "next/link";

export default function Landing() {

    return (
        <section className="relative min-h-[80vh] xl:min-h-screen w-full flex flex-col items-start gap-8 mb-16 xl:mb-0">
            <h1 className="z-10 max-w-screen-md mt-6 xl:mt-24 text-shadow">Fitness Exercises</h1>
            <p className="z-10 max-w-screen-lg">Browse a wide variety of available exercises to integrate into your gym or at-home routine. Any muscle you need to grow, we&#39;ve got your back!</p>
            <div className="max-[430px]:self-center mt-24 flex gap-4 md:gap-8">
                <Link href="/categories" className="z-10 custom-btn" >Browse by category</Link>
                <Link href="/search" className="z-10 custom-btn bg-bg-secondary" >Search</Link>
            </div>
            <figure className="hidden xl:block absolute right-0 w-3/4 z-0">
                <Image priority placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" src={barbellPic} alt="Photo by Anastase Maragos on Unsplash" className="pointer-events-none" />
                <a href="https://unsplash.com/photos/4dlhin0ghOk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="blank" className="text-sm opacity-10 absolute right-0 bottom-0">Photo by Anastase Maragos on Unsplash</a>
            </figure>
        </section>
    )
}