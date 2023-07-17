import { Exercises } from "@/types/types";
import axios, { AxiosError, CreateAxiosDefaults } from "axios";

/**
 * @constant AxiosDefaults Object containing required properties for the Exercises API.
 */
const baseOptions: CreateAxiosDefaults<string | undefined> = {
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': process.env.XRapidAPIKey,
        'X-RapidAPI-Host': process.env.XRapidAPIHost
    }
}
/**
 * @instance axios intance configuration using the baseURL and headers defined in the baseOptions object
 */
export const exerciseDB = axios.create(baseOptions);

export async function getAllExercises(): Promise<Exercises[]> {
    try {
        let response = await exerciseDB.get('/');
        return response.data;
    } catch (error: any) {
        console.log(error.toJSON())
        return error.message;
    }
}

export async function getAllBodyParts(): Promise<string[] | AxiosError> {
    try {
        let response = await exerciseDB.get('/bodyPartList');
        return response.data;
    } catch (error: any) {
        console.log(error.toJSON())
        return error.message;
    }
}

export async function getExercisesByBodyPart(bodyPart: string): Promise<Exercises[] | AxiosError> {
    try {
        let response = await exerciseDB.get(`/bodyPart/${bodyPart}`);
        return response.data;
    } catch (error: any) {
        console.log(error.toJSON())
        return error.message;
    }
}

