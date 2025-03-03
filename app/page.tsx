"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>DOGGY DAYCARE</h1>
      <button onClick={() => router.push("/dogs")}>
        OUR DOGS
      </button>
    </main>
  )
}
