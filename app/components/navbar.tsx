'use client'
import Image from 'next/image';
import logo from '/public/ExerciseFinder.svg';
import Link from "next/link";
import { useState, KeyboardEvent, ChangeEvent } from 'react';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    //TODO: Add the modal menu and check that the TS implementation of the toggle works
    const keyboardToggle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.type === "keydown" && e.code === 'Enter') {
            setToggleMenu(!toggleMenu);
        }
    }
    const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.type === "change") {
            setToggleMenu(!toggleMenu);
        }
    }


    return (
        <nav className="w-screen m-auto mt-4 h-16 flex px-4 xl:px-20 sticky top-4 z-40">
            <div className="px-4 w-full h-full bg-bg-secondary opacity-80 rounded-md flex flex-wrap items-center justify-between gap-6">
                <Link href="/">
                    <Image src={logo} width={224} height={64} alt="logo" />
                </Link>
                <ul className='max-[640px]:hidden flex-grow flex flex-wrap justify-end gap-6'>
                    <li>
                        <Link href="/" className="font-semibold lg:font-normal text-bold-text text-xl tracking-tight">Home</Link>
                    </li>
                    <li>
                        <Link href="/categories" className="font-semibold lg:font-normal text-bold-text text-xl tracking-tight">Categories</Link>
                    </li>
                    <li>
                        <Link href="/search" className="justify-self-start font-semibold lg:font-normal text-bold-text text-xl tracking-tight">Search</Link>
                    </li>
                </ul>
                <div className="sm:hidden w-6 h-6 relative bg-inherit">
                    <input className="z-30 absolute inset-0 w-6 h-6 peer cursor-pointer peer" type="checkbox" name="menu-toggle" id="toggle" onChange={(e) => changeToggle(e)} checked={toggleMenu} onKeyDown={(e) => keyboardToggle(e)} />
                    <span className="absolute inset-0 w-6 h-6 pointer-events-none bg-inherit z-40">
                    </span>
                    <svg viewBox="2 2 20 20" className=" w-6 h-6 z-50 relative pointer-events-none text-bold-text peer-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={2.5} stroke="currentColor">
                        {
                            (!toggleMenu) ? <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                : <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        }
                    </svg>
                </div>
            </div>
        </nav>
    );
}