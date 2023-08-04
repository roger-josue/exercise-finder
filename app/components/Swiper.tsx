'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Swiper({ children }: { children: JSX.Element[] }) {

    const [swiperPosition, setSwiperPosition] = useState<number>(0);
    const swiperRef = useRef<HTMLDivElement>(null);

    const handleSwiperPosition = () => {
        const scrollWidth: number = swiperRef.current!.scrollWidth;
        const amountOfchildren: number = swiperRef.current!.childElementCount;
        const step: number = scrollWidth / amountOfchildren;
        // console.log(scrollWidth);
        // console.log(amountOfchildren);
        // console.log(step);
        // console.log(amountOfchildren % scrollWidth);
        if (swiperPosition + step >= scrollWidth) {
            setSwiperPosition(0);
        } else if (swiperPosition > 0) {
            setSwiperPosition(prev => prev + step);
        } else if (swiperPosition === 0) {
            setSwiperPosition(step);
        }
    }

    useEffect(() => {
        const interval = setInterval(handleSwiperPosition, 2500);
        return ()=> {
            clearInterval(interval);
        }
    })

    useLayoutEffect(() => {
        swiperRef.current?.scrollTo({ left: swiperPosition, top: 0, behavior: "smooth" });
    }, [swiperPosition]);
    

    return (
        <div ref={swiperRef} className="snap-x snap-mandatory will-change-scroll flex flex-nowrap max-[400px]:gap-0 gap-4 xl:gap-10 overflow-x-scroll sm:rounded-md max-[400px]:h-[60vh] hide-scrollbar">
            {children}
        </div>
    );
}