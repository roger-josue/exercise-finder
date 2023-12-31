import Image from "next/image";
import Link from "next/link";
import { Categories } from "@/types/types";
import backPic from "../../public/images/category-back.jpg";
import cardioPic from "../../public/images/category-cardio.jpg";
import chestPic from "../../public/images/category-chest.jpg";
import lowerArmsPic from "../../public/images/category-lower-arms.jpg";
import lowerLegsPic from "../../public/images/category-lower-legs.jpg";
import neckPic from "../../public/images/category-neck.jpg";
import shouldersPic from "../../public/images/category-shoulders.jpg";
import upperArmsPic from "../../public/images/category-upper-arms.jpg";
import upperLegsPic from "../../public/images/category-upper-legs.jpg";
import waistPic from "../../public/images/category-waist.jpg";

export default function CategoryGrid() {
    const categories: Categories = [
        {
            id: "back",
            category: "Back",
            alt: "fxquadro",
            asset: backPic,
            url: "https://www.freepik.com/free-photo/athletic-ectomorph-shirtless-male-holds-barbell-dark-grey-background-back-view_26399871.htm#query=back%20muscles&position=23&from_view=search&track=ais"
        },
        {
            id: "cardio",
            category: "Cardio",
            alt: "prostooleh",
            asset: cardioPic,
            url: "https://www.freepik.com/free-photo/sportswoman-sportswear-training-gym_7120839.htm#query=cardio&position=11&from_view=search&track=sph"
        },
        {
            id: "chest",
            category: "Chest",
            alt: "cookie_studio",
            asset: chestPic,
            url: "https://www.freepik.com/free-photo/young-powerful-sportsman-training-push-ups-dark-wall_7515338.htm#query=push%20ups&position=4&from_view=search&track=ais"
        },
        {
            id: "lower arms",
            category: "Forearms",
            alt: "freepik",
            asset: lowerArmsPic,
            url: "https://www.freepik.com/free-photo/athletic-shirtless-man-training_9156915.htm#query=forearm%20training&position=32&from_view=search&track=ais"
        },
        {
            id: "lower legs",
            category: "Calf",
            alt: "drobotdean",
            asset: lowerLegsPic,
            url: "https://www.freepik.com/free-photo/strong-young-sports-woman-stretching_7729020.htm#query=calves%20training&position=14&from_view=search&track=ais"
        },
        {
            id: "neck",
            category: "Neck",
            alt: "freepik",
            asset: neckPic,
            url: "https://www.freepik.com/free-photo/young-woman-stretching-outside_13703739.htm#query=neck%20stretch&position=2&from_view=search&track=ais"
        },
        {
            id: "shoulders",
            category: "Shoulders",
            alt: "freepik",
            asset: shouldersPic,
            url: "https://www.freepik.com/free-photo/front-view-man-training-with-machine_29301531.htm#query=overhead%20press&position=37&from_view=search&track=ais"
        },
        {
            id: "upper arms",
            category: "Arms",
            alt: "drobotdean",
            asset: upperArmsPic,
            url: "https://www.freepik.com/free-photo/amazing-young-sports-woman-showing-biceps_7380576.htm#query=arm%20training&position=2&from_view=search&track=ais"
        },
        {
            id: "upper legs",
            category: "Legs",
            alt: "freepik",
            asset: upperLegsPic,
            url: "https://www.freepik.com/free-photo/close-up-woman-doing-crossfit-workout_17805428.htm#query=squat&position=4&from_view=search&track=sph"
        },
        {
            id: "waist",
            category: "Core",
            alt: "ArtPhoto_studio",
            asset: waistPic,
            url: "https://www.freepik.com/free-photo/woman-training-abs-with-ball-mat_26589457.htm#query=abs%20training&position=32&from_view=search&track=ais"
        }
    ];

    return (
        <section className="min-h-screen w-full flex flex-col items-start gap-16">
            <h2>Browse by popular muscle groups</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
                {
                    categories.map(category => (
                        <figure className="relative flex min-w-fit min-h-fit rounded-md" key={category.id}>
                            <div className="absolute inset-0 bg-bg-secondary z-20 pointer-events-none bg-transparent custom-inner-shadow"></div>
                            <Image src={category.asset} alt={`Image by ${category.alt} on Freepik`} className="pointer-events-none rounded-md aspect-video object-cover" placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0aSirBwAEJQHD7HKoYwAAAABJRU5ErkJggg=="/>
                            <figcaption className="absolute inset-0 z-30 group">
                                <Link className="absolute left-2 bottom-2 cursor-pointer font-medium text-3xl md:text-5xl text-bold-text transition-all duration-200 hover:text-primary" href={`/categories/${category.id}`}>{category.category}</Link>
                                <a className="text-sm opacity-20 absolute right-2 bottom-0 hover:underline" target="blank" href={category.url}>{`By ${category.alt} on Freepik`}</a>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </section>
    )
}