'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

export default function SearchInput() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        if (sessionStorage.getItem('search')) {
            setSearchInput(sessionStorage.getItem('search')!);
        }
    }, [])


    function navigate() {
        if (searchInput.trim().length > 0) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('search', searchInput);
            router.push(`/search?${params.toString()}#search-result`);
        } else {
            router.push('/search#top');
        }
    }

    function handleInput(input: ChangeEvent<HTMLInputElement>) {
        sessionStorage.setItem('search', input.target.value);
        setSearchInput(input.target.value);
    }

    function handleKeyStroke(key: KeyboardEvent<HTMLInputElement>) {
        if (key.code === 'Enter') {
            navigate();
        }
    }

    return (
        <input
            className="pointer-events-auto w-full sm:w-3/4 lg:w-2/4 text-text tracking-wide text-lg lg:text-xl h-16 rounded-md border-none pl-2 bg-bg-secondary bg-opacity-75 focus:bg-opacity-95 outline-secondary transition-all duration-200" type="text" name="search" id="search"
            placeholder="Search exercises"
            value={searchInput}
            onChange={(e) => { handleInput(e) }}
            onKeyDown={(e) => { handleKeyStroke(e) }}
        />
    );
}