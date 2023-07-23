import { StaticImageData } from "next/image"

export type Exercises = Exercise[]

export interface Exercise {
  bodyPart: string
  equipment: string
  gifUrl: string
  id: string
  name: string
  target: string
}

export type Categories = Category[];
export interface Category {
  id: string;
  category: string;
  asset: StaticImageData;
  url: string;
  alt: string;
}

