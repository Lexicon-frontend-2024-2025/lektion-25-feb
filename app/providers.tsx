'use client';
import React, { createContext, useState } from "react";

interface CatContextInterface {
    catName: string;
    setCatName: React.Dispatch<React.SetStateAction<string>>;
}

// 1. skapa context
export const CatContext = createContext<CatContextInterface | null>(null);


// 2. provider-komponent
export function CatProvider({ children }: { children: React.ReactNode }) {
    const [catName, setCatName] = useState<string>("Ascella");

    return (
        <CatContext.Provider value={{catName, setCatName}}>
            {children}
        </CatContext.Provider>
    )
}