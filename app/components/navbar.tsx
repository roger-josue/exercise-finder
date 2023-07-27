'use client'
import Image from 'next/image';
import logo from '/public/ExerciseFinder.svg';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-screen m-auto mt-4 h-16 flex px-4 xl:px-20 sticky top-4 z-40">
            <ul className="px-4 w-full h-full bg-bg-secondary bg-opacity-0 rounded-md flex flex-wrap items-center justify-start gap-6">
                <li className="flex-grow">
                    <Link href="/">
                        <Image src={logo} width={224} height={64} alt="logo" className='' />
                    </Link>
                </li>
                <li>
                    <Link href="/categories" className="font-semibold lg:font-normal text-bold-text text-xl tracking-tight">Categories</Link>
                </li>
                <li>
                    <Link href="/search" className="justify-self-start font-semibold lg:font-normal text-bold-text text-xl tracking-tight">Search</Link>
                </li>
            </ul>
        </nav>
    );
}