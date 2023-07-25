import ExerciseCard from "@/app/components/exerciseCard";
import { getExercisesByBodyPart } from "@/exerciseDB/exerciseData"
import { Exercises, Exercise } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params }: { params: { category: string } }) {

    const data = await getExercisesByBodyPart(params.category);
    const exercises = (typeof data === "string") ? [] : data;
    
    return (
        <main className="flex min-h-screen w-screen flex-col py-16 px-4 xl:p-20 gap-8">
            <h1 className="text-2xl lg:text-3xl" >Showing results for: {`${params.category.charAt(0).toUpperCase()}${params.category.slice(1)}`} exercises</h1>
            <hr className="border-bg-secondary" />
            <Link href='/'> &gt; Home</Link>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full h-full">
                {
                    exercises.map((exercise: Exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))
                }
                {/* Implement placeholder for empty exercises array as UI error handling*/}
            </div>
        </main>
    )
}
