"use client";

import { fetchDogs } from "@/actions";
import { Dog } from "@/interfaces";
import { createContext, Dispatch, ReactNode, useEffect, useReducer, useState } from "react";

// 1. typdefinitioner
type DogState = { dogs: Dog[] };
type DogAction = { type: string; payload: Dog[] | Dog };

// 2. reducerfunktion
const dogReducer = (state: DogState, action: DogAction): DogState => {
    switch (action.type) {
        case "SET_DOGS":
            return { dogs: action.payload as Dog[] };
        case "ADD_DOG":
            return { ...state, dogs: [...state.dogs, action.payload as Dog] };
        // ...state -> här kopierar vi alla egenskaper från det befintliga state-objektet och kopierar till ett nytt objekt
        // detta för att inte mutera statet direkt
        // dogs: [...state.dogs, action.payload]
        // ...state.dogs => kopierar alla hundar i dogs-arrayen
        // resultat: en NY array med alla gamla hundar + den nya hunden (action.payload)
        case "DELETE_DOG":
            return { ...state, dogs: state.dogs.filter(dog => dog.chipNumber !== (action.payload as Dog).chipNumber) };
        case "UPDATE_DOG":
            return {
                ...state,
                dogs: state.dogs.map(dog => 
                    dog.chipNumber === (action.payload as Dog).chipNumber ? (action.payload as Dog) : dog
                ),
            };
        default:
            return state;
    }
};

// 3. skapa context
export const DogsContext = createContext<{state: DogState; dispatch: Dispatch<DogAction>} | undefined> (
    undefined
);

// 4. provider-komponent
export function DogsProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(dogReducer, {dogs: []});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDogs = async () => {
            try {
                const dogs = await fetchDogs();
                dispatch({ type: "SET_DOGS", payload: dogs });
            } catch (error) {
                console.error("Error fetching dogs:", error);
            } finally {
                setLoading(false);
            }
        };

        getDogs();
    }, []);
    return (
        <DogsContext.Provider value={{state, dispatch}}>
            {children}
        </DogsContext.Provider>
    )
}