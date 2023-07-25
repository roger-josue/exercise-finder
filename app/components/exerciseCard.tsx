import Image from "next/image";
import { Exercise } from "@/types/types";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
    return (
        <div className="relative flex flex-col gap-6 p-4 max-w-full min-h-fit rounded-md place-items-start justify-between bg-bg-secondary">
            <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
            <Image width={350} height={400} src={exercise.gifUrl} alt={`Demonstration of a ${exercise.bodyPart} exercise`} className="rounded-md w-full" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg==" />
            <div className="w-full flex gap-2 justify-start">
                <span className="text-sm font-sans text-bold-text bg-primary rounded-xl px-2 py-1">{exercise.bodyPart}</span>
                <span className="text-sm font-sans text-bold-text bg-primary rounded-xl px-2 py-1">{exercise.equipment}</span>
                <span className="text-sm font-sans text-bold-text bg-primary rounded-xl px-2 py-1">{exercise.target}</span>
            </div>
            <h3 className="text-xl z-30">{`${exercise.name.charAt(0).toUpperCase()}${exercise.name.slice(1)}`}</h3>
        </div>
    );
}