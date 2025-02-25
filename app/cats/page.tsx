'use client';

import React, { useContext } from 'react'
import { CatContext } from '../providers'
import Link from 'next/link';

export default function CatPage() {
    const catctx = useContext(CatContext);

    if (!catctx) throw new Error('catcontext måste användas inom en CatProvider');

    const { catName, setCatName } = catctx;
    return (
        <>
            <div>Hej från catpage, {catName}</div>
            <button onClick={() => setCatName("Annat namn")}>Byt namn</button>
            <Link href="/">Start</Link>
        </>
    )
}
