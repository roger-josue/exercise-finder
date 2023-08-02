'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import barbellPic from '../../public/images/bodybuilder.jpg';

export default function Landing() {

    return (
        <section className="relative overflow-hidden min-h-[65vh] xl:min-h-screen w-full flex flex-col max-lg:justify-center items-start gap-8 mb-16 xl:mb-0">
            <h1 className="z-10 max-w-screen-md mt-6 xl:mt-24 text-shadow">Fitness Exercises</h1>
            <p className="z-10 max-w-screen-lg">Browse a wide variety of available exercises to integrate into your gym or at-home routine. Any muscle you need to grow, we&#39;ve got your back!</p>
            <div className="w-full max-[430px]:self-center mt-24 flex max-[390px]:flex-col max-[390px]:px-6 gap-4 md:gap-8">
                <Link href="/categories" className="z-10 custom-btn max-[390px]:w-full" >Browse by category</Link>
                <Link href="/search" className="z-10 custom-btn max-[390px]:w-full bg-bg-secondary" >Search</Link>
            </div>
            <figure className="hidden xl:block absolute right-0 w-3/4 z-0">
                <Image priority placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" src={barbellPic} alt="Photo by Anastase Maragos on Unsplash" className="pointer-events-none" />
                <a href="https://unsplash.com/photos/4dlhin0ghOk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="blank" className="text-sm opacity-10 absolute right-0 bottom-0">Photo by Anastase Maragos on Unsplash</a>
            </figure>
            <motion.figure animate={{x: -1300, y: 400, rotate: 180}} transition={{repeat: Infinity, duration: 15, repeatType: "mirror", ease: "linear"}} className="block xl:hidden absolute bg-secondary bg-opacity-10 top-4 -right-40 w-40 h-40 z-0 fancy-radius-1"></motion.figure>
            <motion.figure animate={{x: 1300, y: -400, rotate: 180}} transition={{repeat: Infinity, duration: 15, repeatType: "mirror", ease: "linear", delay: 6}} className="block xl:hidden absolute bg-secondary bg-opacity-10 bottom-20 -left-40 w-40 h-40 z-0 fancy-radius-3"></motion.figure>
            <motion.figure animate={{x: 1300, y: 400, rotate: 180}} transition={{repeat: Infinity, duration: 15, repeatType: "mirror", ease: "linear", delay: 4}} className="block xl:hidden absolute bg-primary bg-opacity-10 top-20 -left-40 w-40 h-40 z-0 fancy-radius-2"></motion.figure>
            <motion.figure animate={{x: -1300, y: -200, rotate: 180}} transition={{repeat: Infinity, duration: 15, repeatType: "mirror", ease: "linear", delay: 7}} className="block xl:hidden absolute bg-primary bg-opacity-10 bottom-24 -right-40 w-40 h-40 z-0 fancy-radius-4"></motion.figure>
        </section>
    )
}