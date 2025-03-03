'use client';
import { useDogsContext } from '@/hooks/useDogs'
import React from 'react'

export default function DogsPage() {
    const { state, dispatch } = useDogsContext();

    const addDog = () => {
        const newDogName = prompt("Vad heter hunden?");
        if (newDogName) dispatch({type: "ADD_DOG", payload: {
            name: newDogName,
            sex: '',
            breed: '',
            img: '',
            present: false,
            age: 0,
            chipNumber: '',
            owner: {
                name: "",
                lastName: "",
                phoneNumber: ""
            }
        }})
    };

    return (
        <main>
            <ul>
                {state.dogs.map((dog, i) => (
                    <li key={i}>{dog.name}</li>
                ))}
            </ul>
            <button onClick={addDog}>Lägg till hund</button>
        </main>
    )
}
