"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { useDogsContext } from '@/hooks/useDogs';
export default function DogPage() {
    const { state } = useDogsContext();
    const { chipNumber } = useParams(); // Hämtar "id" från URL:en

    // Hitta hunden i state.dogs baserat på chipNumber
    const dog = state.dogs.find(d => d.chipNumber === chipNumber);

    if (!dog) {
        return <main><h1>Hunden hittades inte!</h1></main>;
    }
    return (
        <main>
            <h1>{dog.name}</h1>
            <p>Chip-nummer: {dog.chipNumber}</p>
        </main>
    )
}
