'use client'
export default function Swiper({ children}: { children: JSX.Element[]}){
    // TODO: useRef to control the swiper's x-position
    return(
        <div className="snap-x snap-mandatory flex flex-nowrap gap-4 overflow-x-scroll sm:rounded-md max-[400px]:h-[60vh]">
            {children}
        </div>
    );
}