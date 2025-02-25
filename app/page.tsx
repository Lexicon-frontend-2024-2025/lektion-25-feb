'use client';

import { useReducer } from "react";

// 1. definierar reducer-funktionen
function counterReducer(state: number, action: string) {
  switch (action) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1;
    case "RESET": return 0;
    default: return state;
  }
}

// skapa en komponent som använder sig av counterReducer
function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <section>
      <p>Räknare: {count}</p>
      <button onClick={() => dispatch("INCREMENT")}>+1</button>
      <button onClick={() => dispatch("DECREMENT")}>-1</button>
      <button onClick={() => dispatch("RESET")}>C</button>
    </section>
  )
}

export default function Home() {

  return (
    <main>
      <Counter />
    </main>
  );
}
