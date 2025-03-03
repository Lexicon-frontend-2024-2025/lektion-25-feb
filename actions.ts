"use server";

import { Dog } from "./interfaces";

// hämta från dogs api
const API_BASE = "https://majazocom.github.io/Data/dogs.json";

export async function fetchDogs(): Promise<Dog[]> {

    const response = await fetch(API_BASE);
    if (!response.ok) {
        throw new Error(`Error HTTP status: ${response.status}`);
    }
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Invalid data format received");
    }

    return data;
}