import ExerciseCard from "@/app/components/exerciseCard";
import { Exercise } from "@/types/types";

export async function getExercisesByBodyPart(bodyPart: string) {
    const options: RequestInit = {
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey!,
            'X-RapidAPI-Host': process.env.XRapidAPIHost!
        }
    }

    let res = await fetch(`${process.env.XRapidAPIBaseURL}/bodyPart/${bodyPart}`, options)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Home({ params }: { params: { category: string } }) {

    const data = await getExercisesByBodyPart(params.category);
    const exercises = data;

    return (
        <main className="flex min-h-screen w-screen flex-col py-16 px-4 xl:p-20 gap-8">
            <h1 className="text-2xl lg:text-3xl" >Showing results</h1>
            <hr className="border-bg-secondary" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full h-full">
                {
                    exercises.map((exercise: Exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))
                }
                {
                    (exercises.length === 0) &&
                    (
                        <div className="col-span-3">
                            <h2 className="text-xl">Not results found at this moment!</h2>
                        </div>
                    )}
            </div>
        </main>
    )
}
