import { Exercise, Exercises } from "@/types/types";
import GridCardWrapper from "../components/gridCardWrapper";
import ExerciseCard from "../components/exerciseCard";

const options: RequestInit = {
    headers: {
        'X-RapidAPI-Key': process.env.XRapidAPIKey!,
        'X-RapidAPI-Host': process.env.XRapidAPIHost!
    }
}

export async function getAllExercises() {

    let res = await fetch(`${process.env.XRapidAPIBaseURL}/`, options)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export async function searchExercise(keyword: string) {

    let res = await fetch(`${process.env.XRapidAPIBaseURL}/name/${keyword.toLowerCase()}`, options)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    let data: Exercises;
    if (searchParams.search === undefined) {
        data = await getAllExercises();
    } else {
        data = await searchExercise(searchParams.search as string);

    }
    const exercises = data;

    return (
        <GridCardWrapper keyword={searchParams.search as string}>
            {
                (exercises.length === 0) ?
                    (
                        <div className="col-span-4 w-full h-[70vh] flex flex-col mt-10 gap-10 justify-start items-center">
                            <h2 className="text-xl">Oops... Not results found!</h2>
                            <figure className="relative w-96 h-96">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="1.7" stroke="#4C8076" className="absolute inset-0 z-20 w-96 h-96">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="#4C8076" className="absolute inset-0 w-96 h-96">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </figure>
                        </div>
                    ) :
                    exercises.map((exercise: Exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))
            }
        </GridCardWrapper>
    );
}