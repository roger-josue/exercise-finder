import { Exercise } from "@/types/types";
import GridCardWrapper from "../components/gridCardWrapper";
import SearchSwipper from "../components/searchSwipper";
import ExerciseCard from "../components/exerciseCard";

export async function getAllExercises() {
    const options: RequestInit = {
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey!,
            'X-RapidAPI-Host': process.env.XRapidAPIHost!
        }
    }

    let res = await fetch(`${process.env.XRapidAPIBaseURL}/`, options)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    
    const data = await getAllExercises();
    const exercises = data;

    return (
            <GridCardWrapper>
            {
                    exercises.map((exercise: Exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))
                }
            </GridCardWrapper>
    );
}