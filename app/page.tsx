'use client';

import { useContext } from "react";
import { CatContext } from "./providers"; 
import Link from "next/link";

export default function Home() {
  const catctx = useContext(CatContext);

  if(!catctx) throw new Error('catcontext måste användas inom en CatProvider');

  const { catName, setCatName } = catctx;

  return (
    <main>
      <h1>HEJ, {catName}</h1>
      <Link href="/cats">CATS</Link>
      <button onClick={() => setCatName("Nytt namn")}>Byt namn</button>
    </main>
  );
}
