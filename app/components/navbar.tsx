'use client'
import Image from 'next/image';
import logo from '/public/ExerciseFinder.svg';
import Link from "next/link";
import useCurrentRoute from '../../Hooks/useCurrentRoute';
import { useState, useRef, useLayoutEffect, KeyboardEvent, ChangeEvent, MouseEvent, useEffect } from 'react';

export default function Navbar() {

    const [toggleModal, setToggleModal] = useState(false);
    const modal = useRef<HTMLDialogElement>(null);
    const currentRoute = useCurrentRoute();


    const closeOnclick: string[] = ["dialog", "ul"];


    const keyboardToggle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.type === "keydown" && e.code === 'Enter') {
            setToggleModal(!toggleModal);
        }
    }
    const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.type === "change") {
            setToggleModal(!toggleModal);
        }
    }
    const handleClickExit = (e: MouseEvent<HTMLDialogElement, globalThis.MouseEvent>) => {
        if (e.type === "click" && closeOnclick.includes(e.currentTarget.localName)) setToggleModal(false);
    }
    const handleKeyExit = (e: KeyboardEvent<HTMLDialogElement>) => {
        const { type, code, target } = e;
        if (type === "keydown" && code === "Escape")
            setToggleModal(false);
    }
    const windowListener = () => {
        if (window.innerWidth >= 640) {
            setToggleModal(false);
        }
    }


    useLayoutEffect(() => {
        if (toggleModal) {
            modal.current?.show();
        } else {
            modal.current?.close();
        }
    }, [toggleModal, setToggleModal]);
    /* 
    Window listener triggers when the modal is opened and the screen is resized bigger than 640px. 
    Closes the modal as soon as it reaches the threshold
    */
    useEffect(() => {
        window.addEventListener('resize', windowListener);

        return () => {
            window.removeEventListener("resize", windowListener);
        };
    }, [windowListener]);


    const menuList: JSX.Element =
        <>
            <li>
                <Link href="/" className={`font-semibold lg:font-normal text-bold-text max-[640px]:text-4xl text-xl tracking-tight transition-all duration-200 sm:focus:text-primary hover:text-primary ${(currentRoute === '/') ? 'text-primary' : ''}`}>Home</Link>
            </li>
            <li>
                <Link href="/categories" className={`font-semibold lg:font-normal text-bold-text max-[640px]:text-4xl text-xl tracking-tight transition-all duration-200 sm:focus:text-primary hover:text-primary ${(currentRoute === 'categories') ? 'text-primary' : ''}`}>Categories</Link>
            </li>
            <li>
                <Link href="/search#top" className={`justify-self-start font-semibold lg:font-normal text-bold-text max-[640px]:text-4xl text-xl tracking-tight transition-all duration-200 sm:focus:text-primary hover:text-primary ${(currentRoute === 'search') ? 'text-primary' : ''} `}>Search</Link>
            </li>
        </>


    return (
        <>
            <nav className={`w-screen m-auto h-20 px-4 xl:px-20 sticky top-0 z-50 ${(toggleModal) ? 'bg-bg-secondary' : 'bg-bg'}`}>
                <div className='w-full h-20 flex flex-wrap items-center justify-between gap-6 bg-inherit'>
                    <Link href="/">
                        <Image src={logo} width={224} height={64} alt="logo" />
                    </Link>
                    <ul className='max-[640px]:hidden flex-grow flex flex-wrap justify-end gap-6'>
                        {menuList}
                    </ul>
                    <div className="sm:hidden w-6 h-6 relative bg-inherit">
                        <input className="z-30 absolute inset-0 w-6 h-6 peer cursor-pointer peer" type="checkbox" name="menu-toggle" id="toggle" onChange={(e) => changeToggle(e)} checked={toggleModal} onKeyDown={(e) => keyboardToggle(e)} />
                        <span className="absolute inset-0 w-6 h-6 pointer-events-none bg-inherit z-30">
                        </span>
                        <svg viewBox="2 2 20 20" className=" w-6 h-6 z-50 relative pointer-events-none text-bold-text peer-hover:text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={2.5} stroke="currentColor">
                            {
                                (!toggleModal) ? <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            }
                        </svg>
                    </div>
                </div>
            </nav>
            {
                (toggleModal) &&
                <dialog ref={modal} onKeyDown={(e) => handleKeyExit(e)} onClick={(e) => handleClickExit(e)} className="fixed z-40 inset-0 w-screen h-screen flex flex-col place-content-center items-center bg-bg-secondary bg-opacity-90">
                    <ul className=" h-16 flex flex-col place-content-center gap-8 grow text-4xl text-center tracking-wider">
                        {menuList}
                    </ul>
                </dialog>
            }
        </>
    );
}