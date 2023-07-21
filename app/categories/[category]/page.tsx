import { getExercisesByBodyPart } from "@/exerciseDB/exerciseData"
import { Exercises, Exercise } from "@/types/types";
import Image from "next/image";

export default async function Home({ params }: { params: { category: string } }) {

    const data = await getExercisesByBodyPart(params.category);
    const exercises = (typeof data === "string") ? [] : data;
    // TODO: Break this down into an exercise card component.
    return (
        <main className="flex min-h-screen w-screen flex-col items-center p-2 xl:p-20 gap-10">
            <h1 className="text-4xl" >{`List of exercises`}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-full">
                {
                    exercises.map((exercise: Exercise) => (
                        <div className="relative flex flex-col gap-4 min-w-fit min-h-fit rounded-md place-items-center" key={exercise.id}>
                            <h3 className="text-2xl z-30">{`${exercise.name.charAt(0).toUpperCase()}${exercise.name.slice(1)}`}</h3>
                            <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                            <Image width={350} height={400} src={exercise.gifUrl} alt={`Demonstration of a ${exercise.bodyPart} exercise`} className="rounded-md" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
                            <p className="text-xl">Equipment needed for this exercise: <strong>{exercise.equipment}</strong></p>
                            <p className="text-xl">This exercise mainly targets: <strong>{exercise.target}</strong></p>
                        </div>
                    ))
                }
                {/* Implement placeholder for empty exercises array as UI error handling*/}
            </div>
        </main>
    )
}
